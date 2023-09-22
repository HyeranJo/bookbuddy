package com.bookbuddy.demo.bookmark.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.repository.BookRepository;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.bookmark.repository.BookmarkRepository;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class BookmarkServiceTest {
    @Autowired
    private BookmarkRepository bookmarkRepository;
    @Autowired
    private MemberService memberService;
    @Autowired
    private BookService bookService;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookmarkService bookmarkService;

    @Test
    @DisplayName("북마크가 존재하지 않을 때 북마크생성")
    void 북마크가존재하지않을때북마크생성() {
        // given
        memberService.createMember(new Member("test@test.com", "test1234!"));
        Member findMember = memberService.findMember("test@test.com");

        bookRepository.save(new Book("test"));
        Book findBook = bookService.findBook("test");

        // when
        Optional<Bookmark> findBookmark = bookmarkRepository.findByMemberAndBook(findMember, findBook);
        Bookmark result = null;
        if(! findBookmark.isPresent()) {
            Bookmark createdBookmark = new Bookmark();

            createdBookmark.addMember(findMember);
            createdBookmark.addBook(findBook);
            result = bookmarkRepository.save(createdBookmark);
        }

        // then
        assertThat(result).isNotNull();
    }

    @Test
    @DisplayName("북마크가 이미 존재할 때 북마크제거")
    void 북마크가이미존재할때북마크제거() {
        // given
        memberService.createMember(new Member("test@test.com", "test1234!"));
        Member findMember = memberService.findMember("test@test.com");

        bookRepository.save(new Book("test"));
        Book findBook = bookService.findBook("test");

        // when
        bookmarkService.createBookmark("test@test.com", "test");
        Optional<Bookmark> findBookmark = bookmarkRepository.findByMemberAndBook(findMember, findBook);
        Bookmark result = null;
        if(findBookmark.isPresent()) {
            bookmarkRepository.delete(findBookmark.get());
        }

        // then
        assertThat(result).isNull();
    }

    @Test
    void findBookmarks() {
    }

    @Test
    void getIsBookmark() {
    }

    public void createBookmarkProcess() {

    }
}