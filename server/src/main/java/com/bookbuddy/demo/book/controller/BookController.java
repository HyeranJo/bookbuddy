package com.bookbuddy.demo.book.controller;

import com.bookbuddy.demo.book.dto.BookDto;
import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.service.BookmarkService;
import com.bookbuddy.demo.global.dto.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {
    private final BookMapper mapper;
    private final BookService bookService;
    private final BookmarkService bookmarkService;
    
    /* 도서 리스트 */
    @GetMapping("/list")
    public ResponseEntity getBooks(@RequestParam("page") @Positive int page,
                                   @RequestParam("size") @Positive int size,
                                   Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Book> findBook = bookService.findBooks(pageRequest);

        // set isBookmark
        List<BookDto.Response> responses = mapper.BooksToBookResponseDtos(findBook.getContent());
        for(BookDto.Response response:responses) {

            response.setBookmark(bookmarkService.getIsBookmark(response.getId(), principal.getUsername()));
        }

        return new ResponseEntity(new MultiResponseDto<>(responses, findBook), HttpStatus.OK);
    }

    /* 카테고리별 도서 리스트 */
    @GetMapping("/list/{category-id}")
    public ResponseEntity getBooksByCategory(@PathVariable("category-id") @Positive long categoryId,
                                             @RequestParam("page") @Positive int page,
                                             @RequestParam("size") @Positive int size,
                                             Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Book> findBook = bookService.findBooksByCategory(pageRequest, categoryId);

        List<BookDto.Response> responses = mapper.BooksToBookResponseDtos(findBook.getContent());
        for(BookDto.Response response:responses) {
            response.setBookmark(bookmarkService.getIsBookmark(response.getId(), principal.getUsername()));
        }
        return new ResponseEntity(new MultiResponseDto<>(responses, findBook), HttpStatus.OK);

    }

    /* 도서 상세 */
    @GetMapping("/{book-id}")
    public ResponseEntity getBook(@PathVariable("book-id") @Positive String bookId,
                                  Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        Book findBook = bookService.findVerifyBook(bookId);

        BookDto.Response response = mapper.BookToBookResponseDto(findBook);
        response.setBookmark(bookmarkService.getIsBookmark(bookId, principal.getUsername()));

        return new ResponseEntity(response, HttpStatus.CREATED);
    }
    /* 도서 삭제 */
    @DeleteMapping("/{book-id}")
    public ResponseEntity deleteBook(@PathVariable("book-id") @Positive String bookId) {
        bookService.deleteBook(bookId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
