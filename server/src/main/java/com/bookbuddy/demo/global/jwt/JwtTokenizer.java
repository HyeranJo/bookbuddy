package com.bookbuddy.demo.global.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Map;

public class JwtTokenizer {
    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.access-token-expired-minutes}")
    private int accessTokenExpiredMinutes;
    @Value("${jwt.refresh-token-expired-minutes}")
    private int refreshTokenExpiredMinutes;

    // secret key를 바이트 코드로 암호화
    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // 암호화된 secret key를 통해 key 조회
    public Key getKeyFromBase64EncodedKey(String base64EncodedKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // 인증된 사용자에게 access token 발급
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(expiration)
                .signWith(key) // 서명을 저장하는 코드
                .compact();
    }
    // access token이 만료되었을 때 토큰 재발급을 위한 refresh token 발급
    public String generateRefreshToken(Map<String, Object> claims,
                                       String subject,
                                       Date expiration,
                                       String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }
}
