package com.bookbuddy.demo.global.advice;

import com.bookbuddy.demo.global.exception.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionAdvice {
    @ExceptionHandler
    public ResponseEntity handlerException(MethodArgumentNotValidException e) {
        List<ErrorResponse.FieldError> errorResponse = ErrorResponse.FieldError.of(e.getBindingResult());

        return new ResponseEntity(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
