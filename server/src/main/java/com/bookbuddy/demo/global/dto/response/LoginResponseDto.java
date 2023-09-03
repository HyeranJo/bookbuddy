package com.bookbuddy.demo.global.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class LoginResponseDto {
    private String email;
    private String password;
}
