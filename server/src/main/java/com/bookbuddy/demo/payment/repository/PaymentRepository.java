package com.bookbuddy.demo.payment.repository;

import com.bookbuddy.demo.payment.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("SELECT p FROM Payment p LEFT JOIN Order o ON o.payment = p.id WHERE o.member.email = :email")
    Page<Payment> findAllByEmail(Pageable pageable, @Param("email") String email);
}
