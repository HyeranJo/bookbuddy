package com.bookbuddy.demo.book.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.repository.BookRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static com.bookbuddy.demo.global.exception.ExceptionCode.BOOK_NOT_FOUND;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public Book findBook(String id) {
        return findVerifyBook(id);
    }

    public boolean isFindBook(String id) {
        return isVerifiedBook(id);
    }
    public boolean isVerifiedBook(String id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return true;
        }
        return false;
    }

    public Book findVerifyBook(String id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        return optionalBook.orElseThrow(()->
                new BusinessException(BOOK_NOT_FOUND));
    }

    public List<Book> findAllByKeyword(String keyword) {
        return bookRepository.findAllByKeyword(keyword);
    }
}
