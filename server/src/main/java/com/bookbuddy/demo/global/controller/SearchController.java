package com.bookbuddy.demo.global.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final BookService bookService;
    private final BookMapper mapper;
    @GetMapping
    public ResponseEntity getBookByKeyword(@RequestParam(value = "keyword", required = false) String keyword) {
        List<Book> book = new ArrayList<>();
        if(StringUtils.hasText(keyword)) {
            book = bookService.findAllByKeyword(keyword);
        }

        return new ResponseEntity(mapper.BooksToBookResponseDtos(book), HttpStatus.OK);
    }
}
