package com.bookbuddy.demo.bookmark.repository;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

}
