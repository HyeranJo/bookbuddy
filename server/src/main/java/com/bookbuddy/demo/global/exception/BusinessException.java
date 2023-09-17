package com.bookbuddy.demo.global.exception;

public class BusinessException extends RuntimeException{
    private ExceptionCode exceptionCode;
    public BusinessException(ExceptionCode exceptionCode) {
        this.exceptionCode = exceptionCode;
    }
}
