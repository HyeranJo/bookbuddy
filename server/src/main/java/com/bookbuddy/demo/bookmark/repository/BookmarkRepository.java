package com.bookbuddy.demo.bookmark.repository;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {

    Optional<Bookmark> findByMemberAndBook(Member findMember, Book findBook);

    @Override
    void delete(Bookmark entity);

    @Query(value="SELECT b FROM Bookmark b WHERE b.member = :member")
    List<Bookmark> findAllByMember(@Param("member") Member member);
}
