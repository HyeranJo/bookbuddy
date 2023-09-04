package com.bookbuddy.demo.member.service;

import com.bookbuddy.demo.member.entity.Member;

public interface MemberService {
    Member createMember(Member member);

    Member findMember(long memberId);

    boolean duplicateEmail(String email);

    Member findMember(String email);
    boolean isFindMember(String email);
}
