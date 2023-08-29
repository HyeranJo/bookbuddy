package com.bookbuddy.demo.order.repository;

import com.bookbuddy.demo.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Override
    List<Order> findAll();
}
