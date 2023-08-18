package com.bookbuddy.demo.security;

import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 회원 정보 조회
        Optional<Member> findMember = memberRepository.findByEmail(username);
        findMember.orElseThrow(() ->
                new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));

        // 회원에 대한 권한 리스트 추가
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));
        // email이 admin 계정일 경우 admin 권한 추가
        if(username.equals("admin@gmail.com")) {
            roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        }
        return null;
    }
}
