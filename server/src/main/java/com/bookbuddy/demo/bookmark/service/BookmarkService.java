package com.bookbuddy.demo.bookmark.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.bookmark.repository.BookmarkRepository;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class BookmarkService {
    private final MemberService memberService;
    private final BookService bookService;
    private final BookmarkRepository bookmarkRepository;

    public BookmarkService(MemberService memberService, BookService bookService, BookmarkRepository bookmarkRepository) {
        this.memberService = memberService;
        this.bookService = bookService;
        this.bookmarkRepository = bookmarkRepository;
    }

    public boolean createBookmark(String email, String bookId) {
        // 북마크가 이미 있다면 해지
        // 없다면 생성
        Member findMember = memberService.findMember(email);
        Book findBook = bookService.findBook(bookId);

        Optional<Bookmark> findBookmark = bookmarkRepository.findByMemberAndBook(findMember, findBook);
        if(findBookmark.isPresent()) {
            bookmarkRepository.delete(findBookmark.get());
            return false;
        } else {
            Bookmark createdBookmark = new Bookmark();

            createdBookmark.addMember(findMember);
            createdBookmark.addBook(findBook);
            bookmarkRepository.save(createdBookmark);
        }
        return true;
    }

    public List<Bookmark> findBookmarks(String email) {
        Member member = memberService.findMember(email);
        List<Bookmark> bookmarks = bookmarkRepository.findAllByMember(member);
        return bookmarks;
    }

    public boolean getIsBookmark(String bookId, String email) {
        if(StringUtils.hasText(email)) {
            Member member = memberService.findMember(email);
            Book book = bookService.findBook(bookId);
            Optional<Bookmark> findBookmark = bookmarkRepository.findByMemberAndBook(member, book);
            if(findBookmark.isPresent()) {
                return true;
            }
        }
        return false;
    }
}