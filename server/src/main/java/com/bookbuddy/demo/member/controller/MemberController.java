package com.bookbuddy.demo.member.controller;

import com.bookbuddy.demo.member.dto.MemberDto;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping
@RequiredArgsConstructor
public class MemberController {
    private MemberMapper mapper;

    /* 회원가입 */
    @PostMapping("/signup")
    public void postMember(@RequestBody MemberDto.Post memberDto) {
        // member로 변환
        Member member = mapper.memberPostDtoToMember(memberDto);
        // member에 대한 권한을 만들어서 db에 저장
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));
        // email이 admin mail일 경우 admin 권한
        if(member.getEmail() == "admin@gmail.com") {
            roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }
        // service에서 create
    }
}
