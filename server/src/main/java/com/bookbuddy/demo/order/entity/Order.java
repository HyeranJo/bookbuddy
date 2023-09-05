package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.payment.entity.Payment;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Table(name="ORDERS")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonManagedReference
    @JoinColumn(name="BOOK_ID")
    @ManyToOne
    private Book book;
    @Column
    private int quantity;
    @Column
    private int price;
    @JsonManagedReference
    @JoinColumn(name="PAYMENT_ID")
    @ManyToOne(cascade = {CascadeType.REMOVE})
    private Payment payment;
    @JsonManagedReference
    @JoinColumn(name="MEMBER_ID")
    @ManyToOne
    private Member member;

    public Order(long id, int quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public Order(int quantity, int price) {
        this.quantity = quantity;
        this.price = price;
    }

    public void addBook(Book book) {
        this.book = book;
        if(! book.getOrders().contains(this)) {
            book.getOrders().add(this);
        }
    }

    public void addPayment(Payment payment) {
        this.payment = payment;
        if(! payment.getOrders().contains(this)) {
            payment.getOrders().add(this);
        }
    }

    public void addMember(Member member) {
        this.member = member;
        if(! member.getOrders().contains(this)) {
            member.getOrders().add(this);
        }
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
