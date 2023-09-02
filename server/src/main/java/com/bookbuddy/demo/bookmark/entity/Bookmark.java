package com.bookbuddy.demo.bookmark.entity;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonManagedReference
    @JoinColumn(name="BOOK_ID")
    @ManyToOne
    private Book book;
    @JsonManagedReference
    @JoinColumn(name="MEMBER_ID")
    @ManyToOne
    private Member member;

    public void addBook(Book book) {
        this.book = book;
        if(! book.getBookmarks().contains(this)) {
            book.addBookmark(this);
        }
    }
    public void addMember(Member member) {
        this.member = member;
        if(! member.getBookmarks().contains(this)) {
            member.addBookmark(this);
        }
    }
}
