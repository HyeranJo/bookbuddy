package com.bookbuddy.demo.book.entity;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor
public class Book {
    @Id
    private String id;
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
    @OneToMany(mappedBy = "book")
    private List<Bookmark> bookmarks;

    public Book(String id, String name, String author, String publisher, int price, Date date, String imgSrc) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.date = date;
        this.imgSrc = imgSrc;
    }
}
