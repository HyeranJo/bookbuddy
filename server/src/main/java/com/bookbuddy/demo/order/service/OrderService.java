package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final BookService bookService;
    public Order createOrder(Order order, OrderDto.Post orderDto) {
            String bookId = orderDto.getBookId();
            order.addBook(bookService.findVerifyBook(bookId));
            orderRepository.save(order);

        return order;
    }
}
