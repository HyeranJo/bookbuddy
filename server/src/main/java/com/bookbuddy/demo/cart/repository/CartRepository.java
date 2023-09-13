package com.bookbuddy.demo.cart.repository;

import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    @Override
    List<Cart> findAll();

    @Query("SELECT c FROM Cart c WHERE c.member = :member")
    List<Cart> findAllByMember(Member member);
}
