package com.bookbuddy.demo.order.repository;

import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Override
    List<Order> findAll();

    @Query("SELECT o FROM Order o WHERE o.member = :member")
    List<Order> findAllByMember(Member member);
}
