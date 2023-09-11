package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.cart.service.CartService;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;


@Transactional(readOnly = true)
@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final CartService cartService;
    private final MemberService memberService;

    @Transactional
    public Order createOrder(Order order, OrderDto.Post orderDto, String email) {
        orderDto.getCarts().stream().map(e->{
            Cart cart = cartService.findCart(e);
            order.addCart(cart);
            cart.addOrder(order);
            return cart;
        }).collect(Collectors.toList());

        return createOrder(order, email);
    }
    @Transactional
    public Order createOrder(Order order, String email) {
        Member member = memberService.findMember(email);
        order.addMember(member);
        member.addOrder(order);

        return orderRepository.save(order);
    }
    private Order findVerifyOrder(long id) {
        return orderRepository.findById(id)
                .orElseThrow(()->new BusinessException(ExceptionCode.ORDER_NOT_FOUND));
    }

    public Page<Order> findOrders(PageRequest pageRequest, String email) {
        return orderRepository.findAllByEmail(pageRequest, email);
    }
}
