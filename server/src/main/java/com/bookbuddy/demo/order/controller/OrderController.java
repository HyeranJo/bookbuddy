package com.bookbuddy.demo.order.controller;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderMapper mapper;
    /* 주문하기 */
    @PostMapping
    public ResponseEntity postOrder(@RequestBody List<OrderDto.Post> orderDto) {
        List<Order> createdOrder = orderService.createOrder(mapper.orderPostDtosToOrders(orderDto), orderDto);
        return new ResponseEntity(mapper.ordersToOrderResponseDtos(createdOrder), HttpStatus.CREATED);
    }
}
