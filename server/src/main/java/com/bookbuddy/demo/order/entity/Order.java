package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.audit.Auditable;
import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.orderbook.OrderBook;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Getter
@Table(name="ORDERS")
@Entity
@NoArgsConstructor
public class Order extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String shipName;
    @Column
    private String address1;
    @Column
    private String address2;
    @Column
    private String shipMobile;
    @Column
    private String shipTel;
    @Column
    private String cstmrName;
    @Column
    private String cstmrMobile;
    @Column
    private String cstmrTel;
    @Column
    private String email;
    @JsonManagedReference
    @JoinColumn(name="MEMBER_ID")
    @ManyToOne
    private Member member;

    @JsonBackReference
    @OneToMany(mappedBy = "order", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<OrderBook> orderBooks = new ArrayList<>();

    public void addOrderBooks(List<OrderBook> orderBooks) {
        this.orderBooks = orderBooks;
        for(OrderBook orderBook : orderBooks) {
            if (orderBook.getOrder() != this) {
                orderBook.addOrder(this);
            }
        }
    }

    public void addMember(Member member) {
        this.member = member;
        if(! member.getOrders().contains(this)) {
            member.getOrders().add(this);
        }
    }

    public Order(String shipName, String address1, String address2, String shipMobile, String shipTel, String cstmrName, String cstmrMobile, String cstmrTel, String email) {
        this.shipName = shipName;
        this.address1 = address1;
        this.address2 = address2;
        this.shipMobile = shipMobile;
        this.shipTel = shipTel;
        this.cstmrName = cstmrName;
        this.cstmrMobile = cstmrMobile;
        this.cstmrTel = cstmrTel;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", shipName='" + shipName + '\'' +
                ", address1='" + address1 + '\'' +
                ", address2='" + address2 + '\'' +
                ", shipMobile='" + shipMobile + '\'' +
                ", shipTel='" + shipTel + '\'' +
                ", cstmrName='" + cstmrName + '\'' +
                ", cstmrMobile='" + cstmrMobile + '\'' +
                ", cstmrTel='" + cstmrTel + '\'' +
                ", email='" + email + '\'' +
                ", member=" + member.getEmail() +
                ", orderBooks=" + orderBooks.toString() +
                '}';
    }
}
