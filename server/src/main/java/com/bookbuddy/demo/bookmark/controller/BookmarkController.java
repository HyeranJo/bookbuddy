package com.bookbuddy.demo.bookmark.controller;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.bookmark.mapper.BookmarkMapper;
import com.bookbuddy.demo.bookmark.service.BookmarkService;
import com.bookbuddy.demo.global.security.MemberDetails;
import com.bookbuddy.demo.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/bookmark")
@RequiredArgsConstructor
public class BookmarkController {
    private final BookmarkService bookmarkService;
    private final BookmarkMapper mapper;
    @PostMapping("/{book-id}")
    public ResponseEntity postBookmark(Authentication authentication, @PathVariable("book-id") @Positive String bookId) {
        MemberDetails principal = (MemberDetails) authentication.getPrincipal();
        log.info("# principal: "+principal.toString());

        bookmarkService.createBookmark(principal.getEmail(), bookId);
        URI uri = UriComponentsBuilder.newInstance()
                .path("/bookmark")
                .build()
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping
    public ResponseEntity getBookmark(Authentication authentication) {
        MemberDetails principal = (MemberDetails) authentication.getPrincipal();

        List<Bookmark> bookmarks = bookmarkService.findBookmarks(principal.getEmail());
        return new ResponseEntity(mapper.bookmarksToBookmarkResponseDtos(bookmarks), HttpStatus.OK);
    }
}
