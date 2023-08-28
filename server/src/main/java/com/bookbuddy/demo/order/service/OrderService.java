package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.book.service.BookService;
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
        String bookId = orderDto.getBookId();
        order.addBook(bookService.findVerifyBook(bookId));

        return orderRepository.save(order);
    }

    public Page<Order> findOrders(PageRequest pageRequest) {;
        return orderRepository.findAll(pageRequest);
    }
}
