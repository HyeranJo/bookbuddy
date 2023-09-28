package com.bookbuddy.demo.book.entity;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.orderbook.OrderBook;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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
    private List<Bookmark> bookmarks = new ArrayList<>();
    @JsonBackReference
    @OneToMany(mappedBy = "book", cascade = CascadeType.REMOVE)
    private List<Cart> carts;
    @JsonBackReference
    @OneToMany(mappedBy = "book", cascade = CascadeType.REMOVE)
    private List<OrderBook> orderBooks;

    @JsonManagedReference
    @JoinColumn(name="CATEGORY_ID")
    @ManyToOne
    private Category category;

    public enum BOOK_SORT {
        BOOK_SORT_DEFAULT("default"),
        BOOK_SORT_NAME("name"),
        BOOK_SORT_PRICE("price"),
        BOOK_SORT_BOOKMARK("bookmark"),
        BOOK_SORT_NEW("new");

        private String name;
        BOOK_SORT(String name) {
            this.name = name;
        }

        public static BOOK_SORT of(String name) {
            for(BOOK_SORT data : BOOK_SORT.values()) {
                if(data.name.equals(name)) {
                    return data;
                }
            }
            return BOOK_SORT_DEFAULT;
        }
        public boolean isName() {
            return this.name.equals(BOOK_SORT_NAME.name);
        }
        public boolean isPrice() {
            return this.name.equals(BOOK_SORT_PRICE.name);
        }
        public boolean isBookmark() {
            return this.name.equals(BOOK_SORT_BOOKMARK.name);
        }
        public boolean isNew() {
            return this.name.equals(BOOK_SORT_NEW.name);
        }
    }

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
    public void addCart(Cart cart) {
        carts.add(cart);
        if(cart.getBook() != this) {
            cart.addBook(this);
        }
    }
    public void addCategory(Category category) {
        this.category = category;
        if(! category.getBook().contains(this)) {
            category.getBook().add(this);
        }
    }

    public void addOrderBook(OrderBook orderBook) {
        orderBooks.add(orderBook);
        if(orderBook.getBook() != this) {
            orderBook.addBook(this);
        }
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
