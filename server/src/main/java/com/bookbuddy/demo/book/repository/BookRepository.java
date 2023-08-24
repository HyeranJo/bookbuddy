package com.bookbuddy.demo.book.repository;

import com.bookbuddy.demo.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findById(String id);
}
