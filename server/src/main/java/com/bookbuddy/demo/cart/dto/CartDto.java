package com.bookbuddy.demo.cart.dto;

import com.bookbuddy.demo.book.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Min;

public class CartDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String id;
        private int quantity;
        private int price;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        @Min(value=1)
        private long id;
        private int quantity;

        public void setId(long id) {
            this.id = id;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private Book book;
        private int quantity;
        private int price;
    }
}
