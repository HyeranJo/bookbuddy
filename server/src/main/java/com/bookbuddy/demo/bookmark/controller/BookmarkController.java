package com.bookbuddy.demo.bookmark.controller;

import com.bookbuddy.demo.bookmark.service.BookmarkService;
import com.bookbuddy.demo.global.security.MemberDetails;
import com.bookbuddy.demo.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/bookmark")
@RequiredArgsConstructor
public class BookmarkController {
    private final BookmarkService bookmarkService;
    @PostMapping("/{book-id}")
    public void postBookmark(Authentication authentication, @PathVariable("book-id") @Positive String bookId) {
        MemberDetails principal = (MemberDetails) authentication.getPrincipal();
        log.info("# principal: "+principal.toString());

        bookmarkService.createBookmark(principal.getEmail(), bookId);
    }
}
