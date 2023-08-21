package com.bookbuddy.demo.global.security.service;

import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.global.security.utils.AccountContext;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 회원 정보 조회
        Optional<Member> findMember = memberRepository.findByEmail(username);
        Member member = findMember.orElseThrow(() ->
                new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));

        // DB에 저장된 권한으로 설정
        List<GrantedAuthority> roles = new ArrayList<>();
        for(String role : member.getRoles()) {
            roles.add(new SimpleGrantedAuthority(role));
        }

        // User 반환
        return new AccountContext(member, roles);
    }
}
