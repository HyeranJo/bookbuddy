package com.bookbuddy.demo.book.repository;

import com.bookbuddy.demo.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
