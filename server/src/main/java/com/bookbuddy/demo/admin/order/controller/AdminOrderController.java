package com.bookbuddy.demo.admin.order.controller;

import com.bookbuddy.demo.admin.order.dto.AdminOrderStatusDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/order")
@RequiredArgsConstructor
public class AdminOrderController {
    private final OrderMapper mapper;
    private final OrderService orderService;
    /* 주문 상태 변경 */
    @PatchMapping("/status")
    public ResponseEntity patchOrderStatus(@RequestBody AdminOrderStatusDto.Patch orderStatusDto) {
        List<Order> orders = orderService.updateOrderStatus(orderStatusDto);
        return new ResponseEntity(mapper.ordersToOrderResponseDtos(orders), HttpStatus.OK);
    }
}
