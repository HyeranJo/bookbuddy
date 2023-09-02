package com.bookbuddy.demo.bookmark.entity;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Entity
@NoArgsConstructor
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
