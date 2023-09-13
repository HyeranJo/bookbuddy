package com.bookbuddy.demo.order.dto;

import com.bookbuddy.demo.orderbook.OrderBookDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private List<OrderBookDto.Post> orderBooks;
        private String shipName;
        private String address1;
        private String address2;
        private String shipMobile;
        private String shipTel;
        private String cstmrName;
        private String cstmrMobile;
        private String cstmrTel;
        private String email;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private List<OrderBookDto.Response> orderBooks;
        private LocalDateTime createdAt;
    }
}
