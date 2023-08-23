package com.bookbuddy.demo.member.entity;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberEmail {
    @NotBlank
    @Pattern(regexp = "^[0-9a-zA-Z@.]{8,20}+$", message = "이메일 형식에 맞지 않습니다.")
    private String email;
}
