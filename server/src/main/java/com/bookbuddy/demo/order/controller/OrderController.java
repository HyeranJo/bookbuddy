package com.bookbuddy.demo.order.controller;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.mapper.OrderMapper;
import com.bookbuddy.demo.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public ResponseEntity postOrder(@RequestBody OrderDto.Post orderDto,
                                    Authentication authentication) {
        if(authentication == null || ! authentication.isAuthenticated()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        User user = (User) authentication.getPrincipal();

        Order createdOrder = orderService.createOrder(user.getUsername(), mapper.orderPostDtoToOrder(orderDto), orderDto);
        return new ResponseEntity(mapper.orderToOrderResponseDto(createdOrder), HttpStatus.CREATED);
    }
    /* 장바구니 수량 업데이트 */
    @PatchMapping("/{order-id}")
    public ResponseEntity patchOrder(@PathVariable("order-id") @Positive long orderId,
                                     @RequestBody @Valid OrderDto.Patch orderDto) {
        orderDto.setId(orderId);
        Order order = orderService.updateOrder(mapper.orderPatchDtoToOrder(orderDto));
        return new ResponseEntity(mapper.orderToOrderResponseDto(order), HttpStatus.OK);
    }
    /* 장바구니 내역 */
    @GetMapping
    public ResponseEntity getOrders(Authentication authentication) {
        if(authentication == null || ! authentication.isAuthenticated()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        User user = (User) authentication.getPrincipal();
        List<Order> orders = orderService.findOrders(user.getUsername());

        return new ResponseEntity(mapper.ordersToOrderResponseDtos(orders), HttpStatus.OK);
    }
    /* 장바구니 삭제 */
    @DeleteMapping("/{order-id}")
    public ResponseEntity deleteOrder(@PathVariable("order-id") @Positive long orderId) {
        orderService.deleteOrder(orderId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
