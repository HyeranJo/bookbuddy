package com.bookbuddy.demo.global.exception;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    BOOK_NOT_FOUND(404, "Book not found");
    
    private int status;
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
