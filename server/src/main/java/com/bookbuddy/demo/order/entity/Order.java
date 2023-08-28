package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.book.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Table(name="ORDERS")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name="BOOK_ID", nullable = true)
    @ManyToOne
    private Book book;
    private int quantity;
    private int price;

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
}
