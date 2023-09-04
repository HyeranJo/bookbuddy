package com.bookbuddy.demo.payment.repository;

import com.bookbuddy.demo.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
