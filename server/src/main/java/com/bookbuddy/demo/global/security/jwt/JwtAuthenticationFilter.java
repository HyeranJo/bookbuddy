package com.bookbuddy.demo.global.security.jwt;

import com.bookbuddy.demo.global.dto.LoginDto;
import com.bookbuddy.demo.global.dto.response.LoginResponseDto;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;
    private final MemberService memberService;

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        // request body를 login dto로 역직렬화
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        // 인증 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        log.info("# authentication: "+authenticationToken);

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityContextHolder.getContext().setAuthentication(authResult);

        String jws = jwtTokenizer.generatedToken(authResult);
        response.setHeader("Authorization","Bearer "+jws);

        // 응답 데이터로 member 반환
        Member principal = (Member) authResult.getPrincipal();
        LoginResponseDto loginResponseDto = new LoginResponseDto(principal.getEmail(), principal.getPassword());
        ObjectMapper objectMapper = new ObjectMapper();
        String responseStr = objectMapper.writeValueAsString(loginResponseDto);

        response.getWriter().println(responseStr);
    }
}

