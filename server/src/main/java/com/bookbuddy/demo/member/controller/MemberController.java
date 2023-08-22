package com.bookbuddy.demo.member.controller;

import com.bookbuddy.demo.member.dto.MemberDto;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.mapper.MemberMapper;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    /* 회원가입 */
    @PostMapping("/signup")
    public ResponseEntity postMember(@RequestBody MemberDto.Post memberDto) {
        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberDto));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.CREATED);
    }

    /* 로그인 */
    @GetMapping("/signin")
    public ResponseEntity getMember(Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();

        long memberId = (long) principal.get("memberId");
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }

    /* 이메일 중복확인 */
    @PostMapping(value = "/duplicate/email")
    public ResponseEntity duplicateEmail(@RequestParam String email) {
        boolean isMember = memberService.duplicateEmail(email);
        return new ResponseEntity<>(isMember, HttpStatus.OK);
    }
}
