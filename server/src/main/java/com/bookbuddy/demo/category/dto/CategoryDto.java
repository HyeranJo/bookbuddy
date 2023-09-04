package com.bookbuddy.demo.category.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;

public class CategoryDto {
    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private String name;
    }
}
