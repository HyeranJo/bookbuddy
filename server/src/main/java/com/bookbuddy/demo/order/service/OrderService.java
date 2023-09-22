package com.bookbuddy.demo.order.service;

import com.bookbuddy.demo.admin.order.dto.AdminOrderStatusDto;
import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import com.bookbuddy.demo.orderbook.OrderBook;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.bookbuddy.demo.order.entity.Order.ORDER_STATUS.ORDER_COMPLETED;


@Transactional(readOnly = true)
@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final MemberService memberService;
    private final BookService bookService;
    @Transactional
    public Order createOrder(Order order, OrderDto.Post orderDto, String email) {
        Member member = memberService.findMember(email);
        order.addMember(member);
        member.addOrder(order);

        List<OrderBook> orderBooks = orderDto.getOrderBooks().stream().map(e -> {
            Book book = bookService.findVerifyBook(e.getBookId());
            OrderBook orderBook = new OrderBook();

            orderBook.addQuantity(e.getQuantity());
            orderBook.addBook(book);
            orderBook.addOrder(order);

            return orderBook;
        }).collect(Collectors.toList());
        order.addOrderBooks(orderBooks);
        Order saveOrder = orderRepository.save(order);

        return saveOrder;
    }
    public Order findOrder(long id) {
        return findVerifyOrder(id);
    }
    private Order findVerifyOrder(long id) {
        return orderRepository.findById(id)
                .orElseThrow(()->new BusinessException(ExceptionCode.ORDER_NOT_FOUND));
    }

    public Page<Order> findOrdersByEmail(PageRequest pageRequest, String email) {
        return orderRepository.findAllByEmail(pageRequest, email);
    }

    public Page<Order> findOrders(PageRequest pageRequest) {
        return orderRepository.findAll(pageRequest);
    }

    @Transactional
    public List<Order> updateOrderStatus(AdminOrderStatusDto.Patch orderStatusDto) {
        Order.ORDER_STATUS status = Order.ORDER_STATUS.of(orderStatusDto.getOrderStatus());
        return orderStatusDto.getOrderIds().stream()
                .map(e->{
                    Order order = findOrder(e);
                    order.setStatus(status);
                    return orderRepository.save(order);
                }).collect(Collectors.toList());
    }

    public Page<Order> findOrdersCompletedByEmail(PageRequest pageRequest, String email) {
        return orderRepository.findOrdersByEmailAndStatus(pageRequest, email, ORDER_COMPLETED);
    }
}
