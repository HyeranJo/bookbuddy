package com.bookbuddy.demo.book.entity;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;
    @Column
    private String writer;
    @Column
    private String publisher;
    @Column
    private int price;
    @Column
    private Date date;

    public Book(long id, String name, String writer, String publisher, int price, Date date) {
        this.id = id;
        this.name = name;
        this.writer = writer;
        this.publisher = publisher;
        this.price = price;
        this.date = date;
    }


    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", writer='" + writer + '\'' +
                ", publisher='" + publisher + '\'' +
                ", price=" + price +
                ", date=" + date +
                '}';
    }
}
