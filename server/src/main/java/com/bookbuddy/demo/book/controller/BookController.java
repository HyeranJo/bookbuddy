package com.bookbuddy.demo.book.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.global.crawling.CrawlingService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.text.ParseException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final CrawlingService crawlingService;
    private final BookMapper mapper;
    
    /* 도서 리스트 */
    @GetMapping("/list")
    public ResponseEntity getMember(@RequestParam("page") @Positive int page,
                                    @RequestParam("size") @Positive int size) throws ParseException, InterruptedException {
        log.info("# 도서리스트");
        log.info("# page: "+page+","+"size: "+size);
        List<Book> dataList = crawlingService.process(page, size);
        return new ResponseEntity(mapper.BookToBookResponseDto(dataList), HttpStatus.CREATED);
    }
}
