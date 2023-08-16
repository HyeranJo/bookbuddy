package com.bookbuddy.demo.member.controller;

import com.bookbuddy.demo.member.dto.MemberDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class MemberController {
    @PostMapping("/signup")
    public void postMember(@RequestBody MemberDto.Post memberDto) {
        
    }
}
