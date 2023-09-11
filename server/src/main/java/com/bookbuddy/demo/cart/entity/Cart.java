package com.bookbuddy.demo.cart.entity;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.order.entity.Order;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
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
    @JoinColumn(name="ORDER_ID")
    @ManyToOne
    private Order order;
    @JsonManagedReference
    @JoinColumn(name="MEMBER_ID")
    @ManyToOne
    private Member member;

    public Cart(long id, int quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public Cart(int quantity, int price) {
        this.quantity = quantity;
        this.price = price;
    }

    public void addBook(Book book) {
        this.book = book;
        if(! book.getCarts().contains(this)) {
            book.getCarts().add(this);
        }
    }

    public void addOrder(Order order) {
        this.order = order;
        if(! order.getCarts().contains(this)) {
            order.getCarts().add(this);
        }
    }

    public void addMember(Member member) {
        this.member = member;
        if(! member.getCarts().contains(this)) {
            member.getCarts().add(this);
        }
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
