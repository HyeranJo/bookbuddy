package com.bookbuddy.demo.security;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        String userPassword = passwordEncoder().encode("user1234");
//        auth.inMemoryAuthentication().withUser("user").password(userPassword).roles("USER");
//
//        String adminPassword = passwordEncoder().encode("admin1234");
//        auth.inMemoryAuthentication().withUser("admin").password(adminPassword).roles("Admin");
//    }

    private PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().ignoringAntMatchers("/h2/**")
                .and()
                .headers().frameOptions().sameOrigin();
    }
}
