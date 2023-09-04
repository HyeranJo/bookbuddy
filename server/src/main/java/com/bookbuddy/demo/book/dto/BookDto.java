package com.bookbuddy.demo.book.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.Date;

public class BookDto {
    @Getter
    @AllArgsConstructor
    public static class Response {
        private String id;
        private String name;
        private String author;
        private String publisher;
        private int price;
        private Date date;
        private String imgSrc;
    }
}
