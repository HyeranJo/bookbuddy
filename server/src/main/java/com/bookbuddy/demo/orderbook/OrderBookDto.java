package com.bookbuddy.demo.orderbook;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

public class OrderBookDto {
    @ToString
    @Getter
    @AllArgsConstructor
    public static class Post{
        private String bookId;
        private int quantity;
    }
    @Getter
    @AllArgsConstructor
    public static class Response {
        private String bookName;
    }
}
