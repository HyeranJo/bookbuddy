package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Iterator;
import java.util.List;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final BookService bookService;
    @Transactional
    public Order createOrder(Order order, OrderDto.Post orderDto) {
        String bookId = orderDto.getId();
        order.addBook(bookService.findVerifyBook(bookId));

        return orderRepository.save(order);
    }

    public List<Order> findOrders() {;
        return orderRepository.findAll();
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
