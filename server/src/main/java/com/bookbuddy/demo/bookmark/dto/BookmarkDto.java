package com.bookbuddy.demo.bookmark.dto;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class BookmarkDto {
    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private Book book;
        private Member member;
    }
}
