package com.bookbuddy.demo.payment.service;

import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.bookbuddy.demo.cart.entity.Order;
import com.bookbuddy.demo.cart.service.OrderService;
import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import com.bookbuddy.demo.payment.repository.PaymentRepository;
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
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final OrderService orderService;
    private final MemberService memberService;

    @Transactional
    public Payment createPaymentOrder(Payment payment, PaymentDto.Post paymentDto, String email) {
        paymentDto.getOrders().stream().map(e->{
            Order order = orderService.findOrder(e);
            payment.addOrder(order);
            order.addPayment(payment);
            return order;
        }).collect(Collectors.toList());

        return createPayment(payment, email);
    }
    @Transactional
    public Payment createPayment(Payment payment, String email) {
        Member member = memberService.findMember(email);
        payment.addMember(member);
        member.addPayment(payment);

        return paymentRepository.save(payment);
    }
    private Payment findVerifyPayment(long id) {
        return paymentRepository.findById(id)
                .orElseThrow(()->new BusinessException(ExceptionCode.PAYMENT_NOT_FOUND));
    }

    public Page<Payment> findPayments(PageRequest pageRequest, String email) {
        return paymentRepository.findAllByEmail(pageRequest, email);
    }
}
