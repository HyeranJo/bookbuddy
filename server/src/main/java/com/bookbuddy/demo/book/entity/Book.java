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
    private String author;
    @Column
    private String publisher;
    @Column
    private int price;
    @Column
    private Date date;
    @Column
    private String imgSrc;

    public Book() {
    }

    public Book(long id, String name, String author, String publisher, int price, Date date, String imgSrc) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.date = date;
        this.imgSrc = imgSrc;
    }


    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                ", price=" + price +
                ", date=" + date +
                '}';
    }
}
