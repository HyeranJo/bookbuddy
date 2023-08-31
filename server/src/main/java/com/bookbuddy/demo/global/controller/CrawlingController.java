package com.bookbuddy.demo.global.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.global.crawling.CrawlingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.text.ParseException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/crawling")
@RequiredArgsConstructor
public class CrawlingController {
    private final CrawlingService crawlingService;

    /* 도서 리스트 */
    @GetMapping
    public ResponseEntity getBooks() throws ParseException, InterruptedException {
        List<Book> dataList = crawlingService.process();
        URI location = UriComponentsBuilder
                .newInstance()
                .path("/crawling")
                .build()
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
