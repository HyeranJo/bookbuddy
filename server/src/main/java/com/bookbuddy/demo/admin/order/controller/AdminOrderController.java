package com.bookbuddy.demo.admin.order.controller;

import com.bookbuddy.demo.admin.order.dto.AdminOrderStatusDto;
import com.bookbuddy.demo.global.dto.response.MultiResponseDto;
import com.bookbuddy.demo.global.dto.response.SingleResponseDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
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
        return new ResponseEntity(new SingleResponseDto<>(mapper.ordersToOrderResponseDtos(orders)), HttpStatus.OK);
    }
    /* 전체 주문 내역 조회 */
    @GetMapping
    public ResponseEntity getOrders(@RequestParam("page") @Positive int page,
                                    @RequestParam("size") @Positive int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Order> orders = orderService.findOrders(pageRequest);
        return new ResponseEntity(new MultiResponseDto(mapper.ordersToOrderResponseDtos(orders.getContent()), orders), HttpStatus.OK);
    }
}
