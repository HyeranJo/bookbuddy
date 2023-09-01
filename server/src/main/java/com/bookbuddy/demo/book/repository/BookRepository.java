package com.bookbuddy.demo.book.repository;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.category.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findById(String id);

    @Query(value="SELECT b FROM Book b where b.name LIKE %:keyword%")
    List<Book> findAllByKeyword(@Param("keyword") String keyword);

    Page<Book> findAll(Pageable pageable);

    @Query(value="SELECT b FROM Book b where b.category = :category",
        countName = "SELECT COUNT(b) FROM Book b where b.category = :category")
    Page<Book> findAllByCategory(@Param("category") Category category, Pageable pageable);
}
