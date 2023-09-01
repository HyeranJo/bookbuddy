package com.bookbuddy.demo.payment.controller;

import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import com.bookbuddy.demo.payment.mapper.PaymentMapper;
import com.bookbuddy.demo.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    private final PaymentMapper mapper;
    @PostMapping("/ship")
    public ResponseEntity createPayment(@RequestBody @Valid PaymentDto.Post paymentDto) {
        Payment payment = paymentService.createPayment(mapper.paymentPostDtoToPayment(paymentDto), paymentDto);
        return new ResponseEntity<>(mapper.paymentToPaymentResponseDto(payment), HttpStatus.CREATED);
    }
}
