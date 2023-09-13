package com.bookbuddy.demo.admin.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class AdminOrderStatusDto {
    @Getter
    @AllArgsConstructor
    public static class Patch {
        private List<Long> orderIds;
        private String orderStatus;
    }
}
