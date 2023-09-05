package com.bookbuddy.demo.book.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.Date;

public class BookDto {
    @Getter
    public static class Response {
        private String id;
        private String name;
        private String author;
        private String publisher;
        private int price;
        private Date date;
        private String imgSrc;
        private boolean bookmark;

        public void setBookmark(boolean bookmark) {
            this.bookmark = bookmark;
        }

        public Response(String id, String name, String author, String publisher, int price, Date date, String imgSrc) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.publisher = publisher;
            this.price = price;
            this.date = date;
            this.imgSrc = imgSrc;
        }
    }
}
