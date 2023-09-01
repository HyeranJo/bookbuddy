package com.bookbuddy.demo.payment.dto;

import com.bookbuddy.demo.order.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

public class PaymentDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private List<Long> orders;
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
        private List<Order> orders;
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
}
