package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.book.entity.Book;

import javax.persistence.*;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name="BOOK_ID")
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Book book;
    private String title;
    private int quantity;
    private int price;
}
