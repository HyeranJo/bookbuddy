package com.bookbuddy.demo.order.entity;

import com.bookbuddy.demo.book.entity.Book;
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
