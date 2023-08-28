package com.bookbuddy.demo.order.dto;

import com.bookbuddy.demo.book.entity.Book;

import javax.persistence.*;

public class OrderDto {
    public static class Post {
        private Book book;
        private String title;
        private int quantity;
        private int price;
    }

    public class Response {
        private Book book;
        private String title;
        private int quantity;
        private int price;
    }
}
