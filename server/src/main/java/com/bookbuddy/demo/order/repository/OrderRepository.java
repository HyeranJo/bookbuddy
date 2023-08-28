package com.bookbuddy.demo.order.repository;

import com.bookbuddy.demo.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
