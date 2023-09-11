package com.bookbuddy.demo.payment.entity;

import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.order.entity.Order;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Entity
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonBackReference
    @OneToMany(mappedBy = "payment", cascade = {CascadeType.REMOVE})
    private List<Order> orders = new ArrayList<>();
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

    public void addOrder(Order order) {
        orders.add(order);
        if(order.getPayment() != this) {
            order.setPayment(this);
        }
    }
    public void addMember(Member member) {
        this.member = member;
        if(! member.getPayments().contains(this)) {
            member.getPayments().add(this);
        }
    }

    public Payment(String shipName, String address1, String address2, String shipMobile, String shipTel, String cstmrName, String cstmrMobile, String cstmrTel, String email) {
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
