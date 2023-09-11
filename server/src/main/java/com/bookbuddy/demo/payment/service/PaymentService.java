package com.bookbuddy.demo.payment.service;

import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.service.OrderService;
import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import com.bookbuddy.demo.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;


@Transactional(readOnly = true)
@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final OrderService orderService;

    @Transactional
    public Payment createPayment(Payment payment, PaymentDto.Post paymentDto) {
        paymentDto.getOrders().stream().map(e->{
            Order order = orderService.findOrder(e);
            payment.addOrder(order);
            order.addPayment(payment);
            return order;
        }).collect(Collectors.toList());

        return paymentRepository.save(payment);
    }

    private Payment findVerifyPayment(long id) {
        return paymentRepository.findById(id)
                .orElseThrow(()->new BusinessException(ExceptionCode.PAYMENT_NOT_FOUND));
    }
}
