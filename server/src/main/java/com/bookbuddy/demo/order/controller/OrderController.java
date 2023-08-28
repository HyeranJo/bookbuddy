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

import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderMapper mapper;
    /* 장바구니 */
    @PostMapping
    public ResponseEntity postOrder(@RequestBody OrderDto.Post orderDto) {
        Order createdOrder = orderService.createOrder(mapper.orderPostDtoToOrder(orderDto), orderDto);
        return new ResponseEntity(mapper.orderToOrderResponseDto(createdOrder), HttpStatus.CREATED);
    }
}
