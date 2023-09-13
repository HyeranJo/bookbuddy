package com.bookbuddy.demo.admin.cs.reply.controller;

import com.bookbuddy.demo.admin.cs.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.cs.reply.entity.Reply;
import com.bookbuddy.demo.admin.cs.reply.mapper.ReplyMapper;
import com.bookbuddy.demo.admin.cs.reply.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin/cs")
@RequiredArgsConstructor
public class ReplyController {
    private final ReplyService replyService;
    private final ReplyMapper mapper;
    @PostMapping
    public ResponseEntity createReply(@RequestBody @Valid ReplyDto.Post replyDto) {
        Reply reply = replyService.createReply(mapper.replyPostDtoToReply(replyDto), replyDto);

        return new ResponseEntity(mapper.replyToReplyResponseDto(reply), HttpStatus.CREATED);
    }
}
