package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final BookService bookService;
    public Order createOrder(Order order, String bookId) {
        Book book = bookService.findVerifyBook(bookId);
        order.addBook(book);
        book.addOrder(order);

        return orderRepository.save(order);
    }
}
