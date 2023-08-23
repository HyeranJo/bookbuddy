package com.bookbuddy.demo.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Pattern(regexp = "^[a-zA-Z0-9@.]{8,20}+$", message = "이메일 형식에 맞지 않습니다.")
        private String email;
        @NotBlank
        @Range(min=8, max=20, message="비밀번호는 8글자 이상, 20글자 이하여야 합니다.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private String email;
        private String password;
    }
}