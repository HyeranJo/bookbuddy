package com.bookbuddy.demo.bookmark.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.repository.BookRepository;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.bookmark.repository.BookmarkRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
@Transactional
class BookmarkServiceTest {
    @Mock
    private BookmarkRepository bookmarkRepository;
    @Mock
    private MemberService memberService;
    @Mock
    private BookService bookService;
    @Mock
    private BookRepository bookRepository;
    @InjectMocks
    private BookmarkService bookmarkService;

    @Test
    @DisplayName("북마크가 존재하지 않을 때 북마크생성")
    void 북마크가존재하지않을때북마크생성() {
        // given
        Member member = new Member("test@test.com", "test1234!");
        Book book = new Book("test");

        given(bookmarkRepository.findByMemberAndBook(Mockito.any(Member.class), Mockito.any(Book.class)))
                .willReturn(null);

        given(bookmarkRepository.save(Mockito.any(Bookmark.class)))
                .willAnswer(invocation -> invocation.getArgument(0));

        // when
        Optional<Bookmark> findBookmark = Optional.ofNullable(bookmarkRepository.findByMemberAndBook(member, book))
                .orElse(Optional.empty());

        Bookmark result = null;
        if(! findBookmark.isPresent()) {
            Bookmark createdBookmark = new Bookmark();

            createdBookmark.addMember(member);
            createdBookmark.addBook(book);
            result = bookmarkRepository.save(createdBookmark);
        }

        // then
        assertThat(result).isNotNull();
    }

    @Test
    @DisplayName("북마크가 이미 존재할 때 북마크제거")
    void 북마크가이미존재할때북마크제거() {
        // given
        Member member = new Member("test@test.com", "test1234!");
        Book book = new Book("test");

        given(bookmarkRepository.findByMemberAndBook(Mockito.any(Member.class), Mockito.any(Book.class)))
                .willReturn(Optional.of(new Bookmark()));

        // when
        Optional<Bookmark> bookmark = bookmarkRepository.findByMemberAndBook(member, book);
        if(bookmark.isPresent()) {
            bookmarkRepository.delete(bookmark.get());
        }
        // then
        verify(bookmarkRepository, times(1)).delete(Mockito.any(Bookmark.class));
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