package com.bookbuddy.demo.admin.cs.reply.repository;

import com.bookbuddy.demo.admin.cs.reply.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
}
