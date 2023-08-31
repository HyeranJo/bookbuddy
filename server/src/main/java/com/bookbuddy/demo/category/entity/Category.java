package com.bookbuddy.demo.category.entity;

import com.bookbuddy.demo.book.entity.Book;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;
    @Column
    private String link;
    @OneToMany(mappedBy = "category")
    private List<Book> book;

    public Category(String name, String link) {
        this.name = name;
        this.link = link;
    }

    public void addBook(Book book) {
        this.getBook().add(book);
        if(book.getCategory() != this) {
            book.setCategory(this);
        }
    }
}
