package com.bookbuddy.demo.member.service;

import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemberServiceImpl implements MemberService{
    private MemberRepository memberRepository;

    private PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    @Override
    public Member createMember(Member member) {
        // 비밀번호 암호화
        String password = passwordEncoder().encode(member.getPassword());
        member.setPassword(password);
        
        // 회원에 대한 권한 추가
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        // email이 admin 계정일 경우 admin 권한 추가
        if(member.getEmail().equals("admin@gmail.com")) {
            roles.add("ROLE_ADMIN");
        }
        member.setRoles(roles);

        return memberRepository.save(member);
    }
}
