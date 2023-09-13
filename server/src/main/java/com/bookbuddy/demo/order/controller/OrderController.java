package com.bookbuddy.demo.order.controller;

import com.bookbuddy.demo.global.dto.response.MultiResponseDto;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;
    private final OrderMapper mapper;
    /* 주문하기 */
    @PostMapping("/ship")
    public ResponseEntity createOrder(@RequestBody @Valid OrderDto.Post orderDto,
                                        Authentication authentication) {
        User principal = (User) authentication.getPrincipal();
        Order order = orderService.createOrder(mapper.orderPostDtoToOrder(orderDto), orderDto, principal.getUsername());

        return new ResponseEntity<>(mapper.orderToOrderResponseDto(order), HttpStatus.CREATED);
    }
    /* 내 주문 내역 조회 */
    @GetMapping("/ship")
    public ResponseEntity getOrders(@RequestParam("page") @Positive int page,
                                      @RequestParam("size") @Positive int size,
                                      Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Order> orders = orderService.findOrdersByEmail(pageRequest, principal.getUsername());
        return new ResponseEntity(new MultiResponseDto(mapper.ordersToOrderResponseDtos(orders.getContent()), orders), HttpStatus.OK);
    }
}
