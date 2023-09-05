package com.bookbuddy.demo.global.controller;

import com.bookbuddy.demo.book.dto.BookDto;
import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
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
    private final BookmarkService bookmarkService;
    @GetMapping
    public ResponseEntity getBookByKeyword(@RequestParam(value = "keyword", required = false) String keyword,
                                           Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        List<Book> books = new ArrayList<>();
        if(StringUtils.hasText(keyword)) {
            books = bookService.findAllByKeyword(keyword);
        }

        // set isBookmark
        List<BookDto.Response> responses = mapper.BooksToBookResponseDtos(books);
        for(BookDto.Response response:responses) {
            response.setBookmark(bookmarkService.getIsBookmark(response.getId(), principal.getUsername()));
        }

        return new ResponseEntity(responses, HttpStatus.OK);
    }
}
