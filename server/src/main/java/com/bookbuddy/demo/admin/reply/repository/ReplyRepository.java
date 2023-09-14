package com.bookbuddy.demo.admin.reply.repository;

import com.bookbuddy.demo.admin.reply.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    @Query("SELECT r FROM Reply r WHERE r.board.id = :boardId")
    Optional<Reply> findByBoardId(@Param("boardId") long boardId);
}
