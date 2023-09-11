package com.bookbuddy.demo.payment.controller;

import com.bookbuddy.demo.global.dto.response.MultiResponseDto;
import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import com.bookbuddy.demo.payment.mapper.PaymentMapper;
import com.bookbuddy.demo.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/payment/ship")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;
    private final PaymentMapper mapper;
    @PostMapping
    public ResponseEntity createPayment(@RequestBody @Valid PaymentDto.Post paymentDto) {
        Payment payment = paymentService.createPayment(mapper.paymentPostDtoToPayment(paymentDto), paymentDto);
        return new ResponseEntity<>(mapper.paymentToPaymentResponseDto(payment), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity getPayments(@RequestParam("page") @Positive int page,
                                      @RequestParam("size") @Positive int size,
                                      Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Payment> payments = paymentService.findPayments(pageRequest, user.getUsername());
        return new ResponseEntity(new MultiResponseDto(mapper.paymentsToPaymentResponseDtos(payments.getContent()), payments), HttpStatus.OK);
    }
}
