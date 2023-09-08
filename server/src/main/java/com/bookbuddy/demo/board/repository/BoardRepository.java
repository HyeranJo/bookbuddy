package com.bookbuddy.demo.board.repository;

import com.bookbuddy.demo.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
