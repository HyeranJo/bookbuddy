package com.bookbuddy.demo.orderbook;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.order.entity.Order;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class OrderBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonManagedReference
    @JoinColumn(name="ORDER_ID")
    @ManyToOne
    private Order order;
    @JsonManagedReference
    @JoinColumn(name="BOOK_ID")
    @ManyToOne
    private Book book;
    @Column
    private int quantity;

    @Override
    public String toString() {
        return "OrderBook{" +
                "id=" + id +
                ", order=" + order.getId() +
                ", book=" + book.getId() +
                ", quantity=" + quantity +
                '}';
    }

    public void addOrder(Order order) {
        this.order = order;
        if(! this.order.getOrderBooks().contains(this)) {
            this.order.getOrderBooks().add(this);
        }
    }

    public void addBook(Book book) {
        this.book = book;
        if(! this.book.getOrderBooks().contains(this)) {
            this.book.addOrderBook(this);
        }
    }

    public void addQuantity(int quantity) {
        this.quantity = quantity;
    }
}
