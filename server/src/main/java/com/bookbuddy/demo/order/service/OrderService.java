package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final BookService bookService;
    private final MemberService memberService;
    @Transactional
    public Order createOrder(String email, Order order, OrderDto.Post orderDto) {
        String bookId = orderDto.getId();
        Member member = memberService.findMember(email);
        order.addBook(bookService.findVerifyBook(bookId));
        order.addMember(member);
        member.addOrder(order);

        return orderRepository.save(order);
    }

    @Transactional
    public Order updateOrder(Order order) {
        Order findOrder = findVerifyOrder(order.getId());

        Optional.ofNullable(order.getQuantity())
                        .ifPresent(quantity->findOrder.setQuantity(quantity));

        return orderRepository.save(findOrder);
    }

    public List<Order> findOrders(String email) {
        Member member = memberService.findMember(email);
        return orderRepository.findAllByMember(member);
    }
    public Order findOrder(long orderId) {
        return findVerifyOrder(orderId);
    }

    @Transactional
    public void deleteOrder(long orderId) {
        Order findOrder = findVerifyOrder(orderId);
        orderRepository.delete(findOrder);
    }

    private Order findVerifyOrder(long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(()->new BusinessException(ExceptionCode.ORDER_NOT_FOUND));
    }
}
