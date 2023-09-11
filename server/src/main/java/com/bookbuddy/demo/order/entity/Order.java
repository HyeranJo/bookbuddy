package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Table(name="ORDERS")
@Entity
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonBackReference
    @OneToMany(mappedBy = "order", cascade = {CascadeType.REMOVE})
    private List<Cart> carts = new ArrayList<>();
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

    public void addCart(Cart cart) {
        carts.add(cart);
        if(cart.getOrder() != this) {
            cart.setOrder(this);
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
}
