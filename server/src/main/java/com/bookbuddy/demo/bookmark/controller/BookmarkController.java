package com.bookbuddy.demo.bookmark.controller;

import com.bookbuddy.demo.bookmark.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/bookmark")
@RequiredArgsConstructor
public class BookmarkController {
    private BookmarkService bookmarkService;
    @PostMapping("/{book-id}")
    public void postBookmark(Authentication authentication, @PathVariable("book-id") @Positive String bookId) {
        String email = authentication.getPrincipal().toString();
        bookmarkService.createBookmark(email, bookId);
    }
}
