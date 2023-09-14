package com.bookbuddy.demo.order.repository;

import com.bookbuddy.demo.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "SELECT o FROM Order o LEFT JOIN Member m ON o.member.id = m.id WHERE m.email = :email ORDER BY o.createdAt DESC",
        countName = "SELECT (o) FROM Order o LEFT JOIN Member m ON p.member.id = m.id WHERE m.email = :email ORDER BY o.createdAt DESC")
    Page<Order> findAllByEmail(Pageable pageable, @Param("email") String email);

    @Query(value = "SELECT o FROM Order o ORDER BY o.createdAt DESC",
            countName = "SELECT (o) FROM Order o ORDER BY o.createdAt DESC")
    Page<Order> findAll(Pageable pageable);
}
