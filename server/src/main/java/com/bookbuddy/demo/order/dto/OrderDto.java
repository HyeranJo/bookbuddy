package com.bookbuddy.demo.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class OrderDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        private List<Long> carts;
        private String shipName;
        private String address1;
        private String address2;
        private String shipMobile;
        private String shipTel;
        private String cstmrName;
        private String cstmrMobile;
        private String cstmrTel;
        private String email;

        public Post(String shipName, String address1, String address2, String shipMobile, String shipTel, String cstmrName, String cstmrMobile, String cstmrTel, String email) {
            this.shipName = shipName;
            this.address1 = address1;
            this.address2 = address2;
            this.shipMobile = shipMobile;
            this.shipTel = shipTel;
            this.cstmrName = cstmrName;
            this.cstmrMobile = cstmrMobile;
            this.cstmrTel = cstmrTel;
            this.email = email;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private List<Long> carts;
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
