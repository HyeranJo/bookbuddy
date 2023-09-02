package com.bookbuddy.demo.book.entity;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.order.entity.Order;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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
    @JsonBackReference
    @OneToMany(mappedBy = "book")
    private List<Bookmark> bookmarks;
    @JsonBackReference
    @OneToMany(mappedBy = "book", cascade = CascadeType.REMOVE)
    private List<Order> orders;

    @JsonManagedReference
    @JoinColumn(name="CATEGORY_ID")
    @ManyToOne
    private Category category;

    public Book(String id) {
        this.id = id;
    }

    public Book(String id, String name, String author, String publisher, int price, Date date, String imgSrc, Category category) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.date = date;
        this.imgSrc = imgSrc;
        this.category = category;
    }

    public void addBookmark(Bookmark bookmark) {
        bookmarks.add(bookmark);
        if(bookmark.getBook() != this) {
            bookmark.addBook(this);
        }
    }
    public void addOrder(Order order) {
        orders.add(order);
        if(order.getBook() != this) {
            order.addBook(this);
        }
    }
    public void addCategory(Category category) {
        this.category = category;
        if(! category.getBook().contains(this)) {
            category.getBook().add(this);
        }
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
