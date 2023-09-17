package com.bookbuddy.demo.global.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class LoginDto {
    private String email;
    private String password;
}
