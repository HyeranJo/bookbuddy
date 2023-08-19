package com.bookbuddy.demo.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String email;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private String email;
        private String password;
    }
}