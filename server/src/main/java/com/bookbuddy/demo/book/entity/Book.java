package com.bookbuddy.demo.book.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
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
}
