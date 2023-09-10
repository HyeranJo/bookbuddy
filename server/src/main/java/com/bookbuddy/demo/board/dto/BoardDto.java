package com.bookbuddy.demo.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class BoardDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long id;
        private String title;
        private String content;
        private long memberId;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long id;
        private String title;
        private String content;

        public void setId(long id) {
            this.id = id;
        }
    }
}
