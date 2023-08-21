package com.bookbuddy.demo.global.security.utils;

import com.bookbuddy.demo.member.entity.Member;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Data
public class UserDetail extends User {
    private Member member;
    private List<GrantedAuthority> roles;

    public UserDetail(Member member, List<GrantedAuthority> roles) {
        super(member.getEmail(), member.getPassword(), roles);
        this.member = member;
        this.roles = roles;
    }
}
