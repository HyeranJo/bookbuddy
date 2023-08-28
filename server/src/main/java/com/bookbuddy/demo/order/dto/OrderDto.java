package com.bookbuddy.demo.order.dto;

import com.bookbuddy.demo.book.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.*;

public class OrderDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String bookId;
        private int quantity;
        private int price;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private String bookId;
        private int quantity;
        private int price;
    }
}
