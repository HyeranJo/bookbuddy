package com.bookbuddy.demo.order.controller;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderMapper mapper;
    public ResponseEntity postOrder(@RequestParam OrderDto.Post orderDto) {
        Order order = orderService.createOrder(mapper.orderPostDtoToOrder(orderDto));
        return new ResponseEntity(mapper.orderToOrderResponseDto(order), HttpStatus.CREATED);
    }
}
