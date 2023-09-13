package com.bookbuddy.demo.admin.cs.reply.service;

import com.bookbuddy.demo.admin.cs.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.cs.reply.entity.Reply;
import com.bookbuddy.demo.admin.cs.reply.mapper.ReplyMapper;
import com.bookbuddy.demo.admin.cs.reply.repository.ReplyRepository;
import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReplyService {
    private final ReplyMapper mapper;
    private final ReplyRepository replyRepository;
    private final BoardService boardService;
    public Reply createReply(Reply reply, ReplyDto.Post replyDto) {
        Board board = boardService.findBoard(replyDto.getBoardId());
        reply.addBoard(board);

        return replyRepository.save(reply);
    }
}