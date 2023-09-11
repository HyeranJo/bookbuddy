package com.bookbuddy.demo.payment.repository;

import com.bookbuddy.demo.payment.entity.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query(value = "SELECT p FROM Payment p LEFT JOIN Member m ON p.member.id = m.id WHERE m.email = :email",
        countName = "SELECT (p) FROM Payment p LEFT JOIN Member m ON p.member.id = m.id WHERE m.email = :email")
    Page<Payment> findAllByEmail(Pageable pageable, @Param("email") String email);
}
