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
    public List<Order> createOrder(List<Order> orders, List<OrderDto.Post> orderDtos) {
        for(int i = 0; i < orders.size(); ++i) {
            String bookId = orderDtos.get(i).getBookId();
            orders.get(i).addBook(bookService.findVerifyBook(bookId));
            orderRepository.save(orders.get(i));
        }

        return orders;
    }
}
