package com.bookbuddy.demo.admin.cs.reply.controller;

import com.bookbuddy.demo.admin.cs.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.cs.reply.entity.Reply;
import com.bookbuddy.demo.admin.cs.reply.mapper.ReplyMapper;
import com.bookbuddy.demo.admin.cs.reply.service.ReplyService;
import com.bookbuddy.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/admin/cs")
@RequiredArgsConstructor
public class ReplyController {
    private final ReplyService replyService;
    private final ReplyMapper mapper;
    @PostMapping
    public ResponseEntity createReply(@RequestBody @Valid ReplyDto.Post replyDto) {
        replyService.verifyReply(replyDto.getBoardId());
        Reply reply = replyService.createReply(mapper.replyPostDtoToReply(replyDto), replyDto);

        return new ResponseEntity(mapper.replyToReplyResponseDto(reply), HttpStatus.CREATED);
    }
    @GetMapping("/{board-id}")
    public ResponseEntity getReply(@PathVariable("board-id") @Positive long boardId) {
        Reply reply = replyService.findReplyByBoardId(boardId);

        return new ResponseEntity(mapper.replyToReplyResponseDto(reply), HttpStatus.OK);
    }
}
