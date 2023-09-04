package com.bookbuddy.demo.global.security.jwt;

import com.bookbuddy.demo.global.security.MemberDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Getter
@Service
public class JwtTokenizer {
    @Value("${jwt.secret}")
    private String key;
    @Value("${jwt.expirationMinutes}")
    private int tokenExpiration;
    @Value("${jwt.refreshExpirationMinutes}")
    private int tokenRefreshExpiration;
    /* secret key 인코딩 */
    public String encodedKey() {
        return Encoders.BASE64.encode(key.getBytes(StandardCharsets.UTF_8));
    }
    /* 인코딩한 키를 통해 key 조회 */
    public Key getKeyFromEncodedKey(String encodedKey) {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(encodedKey));
    }
    /* JWT 생성 */
    public String generatedToken(Authentication authentication) {
        Map<String, Object> claims = new HashMap<>();

        List<String> authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority).collect(Collectors.toList());

        claims.put("username", authentication.getName());
        claims.put("roles", authorities);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(getTokenExpiration(tokenExpiration))
                .signWith(getKeyFromEncodedKey(encodedKey()))
                .compact();
    }

    /* 토큰 만료되었는지 확인 */
    public Date getTokenExpiration(int expirationMinutes) {
        Date now = new Date();
        return new Date(now.getTime() + (expirationMinutes * 60 * 1000));
    }
    /* 토큰을 이용해 Authentication 조회 */
    public Authentication getAuthentication(String jws) {
        Claims claims = getClaims(jws);

        List<String> roles = (List<String>) claims.get("roles");
        List<SimpleGrantedAuthority> authorities = roles.stream().map(e->
                new SimpleGrantedAuthority(e)).collect(Collectors.toList());
        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, jws, authorities);
    }
    /* 토큰을 이용해 Claims 조회 */
    public Claims getClaims(String jws) {
        return Jwts.parserBuilder()
                .setSigningKey(getKeyFromEncodedKey(encodedKey()))
                .build()
                .parseClaimsJws(jws).getBody();
    }
    /* 토큰 검증 */
    public boolean validationToken(String jws) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getKeyFromEncodedKey(encodedKey()))
                    .build()
                    .parseClaimsJws(jws);
        } catch(Exception e) {
            log.info(e.getMessage());
            return false;
        }
        return true;
    }
}
