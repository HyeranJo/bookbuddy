package com.bookbuddy.demo.admin.board.controller;

import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.mapper.BoardMapper;
import com.bookbuddy.demo.board.service.BoardService;
import com.bookbuddy.demo.global.dto.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RequestMapping("/admin/cs")
@RequiredArgsConstructor
@RestController
public class AdminBoardController {
    private final BoardService boardService;
    private final BoardMapper mapper;
    /* 전체 주문 내역 */
    @GetMapping
    public ResponseEntity getBoards(@RequestParam("page") @Positive int page,
                                    @RequestParam("size") @Positive int size) {
        PageRequest pageRequest = PageRequest.of(page - 1, size, Sort.by("createdAt").descending());
        Page<Board> boards = boardService.findBoards(pageRequest);

        return new ResponseEntity(new MultiResponseDto(mapper.boardsToBoardResponseDtos(boards.getContent()), boards), HttpStatus.OK);
    }
}
