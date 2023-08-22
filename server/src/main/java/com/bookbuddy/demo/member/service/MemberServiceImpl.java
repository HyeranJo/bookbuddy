package com.bookbuddy.demo.member.service;

import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.bookbuddy.demo.global.exception.ExceptionCode.MEMBER_NOT_FOUND;

@Slf4j
@Service
public class MemberServiceImpl implements MemberService{
    private MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

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

    @Override
    public Member findMember(long memberId) {
        return findVerifyMember(memberId);
    }
    @Override
    public boolean duplicateEmail(String email) {
        return isVerifiedMember(email);
    }

    private boolean isVerifiedMember(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent()) {
            return true;
        }
        return false;
    }

    private Member findVerifyMember(long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(()-> new BusinessException(MEMBER_NOT_FOUND));
    }
}
