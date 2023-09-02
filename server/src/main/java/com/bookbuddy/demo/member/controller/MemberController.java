package com.bookbuddy.demo.member.controller;

import com.bookbuddy.demo.global.dto.LoginDto;
import com.bookbuddy.demo.global.security.jwt.JwtTokenizer;
import com.bookbuddy.demo.member.dto.MemberDto;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.entity.MemberEmail;
import com.bookbuddy.demo.member.mapper.MemberMapper;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.Jar;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping
@RequiredArgsConstructor
public class MemberController {
    private final MemberMapper mapper;
    private final MemberService memberService;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenizer jwtTokenizer;

    /* 회원가입 */
    @PostMapping("/signup")
    public ResponseEntity postMember(@RequestBody @Valid MemberDto.Post memberDto) {
        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberDto));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.CREATED);
    }

    /* 로그인 */
    @GetMapping("/signin")
    public ResponseEntity getMember(@Valid @RequestBody LoginDto loginDto) {
        Member member = memberService.findMember(loginDto.getEmail());
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }

    /* 이메일 중복확인 */
    @PostMapping(value = "/duplicate/email")
    public ResponseEntity duplicateEmail(@RequestBody @Valid MemberEmail email) {
        boolean isMember = memberService.duplicateEmail(email.getEmail());
        return new ResponseEntity<>(isMember, HttpStatus.OK);
    }
}
