package com.bookbuddy.demo.bookmark.entity;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;

import javax.persistence.*;

@Entity
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(name="BOOK_ID")
    @ManyToOne
    private Book book;
    @JoinColumn(name="MEMBER_ID")
    @ManyToOne
    private Member member;
}
