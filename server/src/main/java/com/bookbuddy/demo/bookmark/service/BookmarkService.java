package com.bookbuddy.demo.bookmark.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.bookmark.repository.BookmarkRepository;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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

    public void createBookmark(String email, String bookId) {
        // 북마크가 이미 있다면 해지
        // 없다면 생성
        Member findMember = memberService.findMember(email);
        Book findBook = bookService.findBook(bookId);

        Optional<Bookmark> findBookmark = bookmarkRepository.findByMemberAndBook(findMember, findBook);
        if(findBookmark.isPresent()) {
            bookmarkRepository.delete(findBookmark.get());
        } else {
            Bookmark createdBookmark = new Bookmark();

            createdBookmark.addMember(findMember);
            createdBookmark.addBook(findBook);
            bookmarkRepository.save(createdBookmark);
        }
    }
}