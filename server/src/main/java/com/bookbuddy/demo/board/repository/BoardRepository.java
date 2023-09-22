package com.bookbuddy.demo.board.repository;

import com.bookbuddy.demo.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query(value = "SELECT b FROM Board b WHERE b.member.email = :email",
            countName = "SELECT (b) FROM Board b WHERE b.member.email = :email")
    Page<Board> findAllByEmail(Pageable pageable, String email);
}
