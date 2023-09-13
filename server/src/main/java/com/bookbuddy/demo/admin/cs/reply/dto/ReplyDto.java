package com.bookbuddy.demo.admin.cs.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class ReplyDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private long boardId;
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long boardId;
        private String content;
    }
}
