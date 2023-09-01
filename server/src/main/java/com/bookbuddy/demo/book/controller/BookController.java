package com.bookbuddy.demo.book.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.mapper.BookMapper;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.global.crawling.CrawlingService;
import com.bookbuddy.demo.global.dto.MultiResponseDto;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Max;
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
    private final BookService bookService;
    
    /* 도서 리스트 */
    @GetMapping("/list")
    public ResponseEntity getBooks(@RequestParam("page") @Positive int page,
                                    @RequestParam("size") @Positive int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Book> findBook = bookService.findBooks(pageRequest);
        return new ResponseEntity(new MultiResponseDto<>(mapper.BooksToBookResponseDtos(findBook.getContent()), findBook), HttpStatus.OK);
    }

    /* 카테고리별 도서 리스트 */
    @GetMapping("/list/{category-id}")
    public ResponseEntity getBooksByCategory(@PathVariable("category-id") @Positive long categoryId,
                                             @RequestParam("page") @Positive int page,
                                             @RequestParam("size") @Positive int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size);
        Page<Book> findBook = bookService.findBooksByCategory(pageRequest, categoryId);
        return new ResponseEntity(new MultiResponseDto<>(mapper.BooksToBookResponseDtos(findBook.getContent()), findBook), HttpStatus.OK);

    }

    /* 도서 상세 */
    @GetMapping("/{book-id}")
    public ResponseEntity getBook(@PathVariable("book-id") @Positive String bookId) {
        Book findBook = bookService.findVerifyBook(bookId);
        return new ResponseEntity(mapper.BookToBookResponseDto(findBook), HttpStatus.CREATED);
    }
    /* 도서 삭제 */
    @DeleteMapping("/{book-id}")
    public ResponseEntity deleteBook(@PathVariable("book-id") @Positive String bookId) {
        bookService.deleteBook(bookId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
