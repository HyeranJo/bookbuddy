package com.bookbuddy.demo.board.controller;

import com.bookbuddy.demo.board.dto.BoardDto;
import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.mapper.BoardMapper;
import com.bookbuddy.demo.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/board/cs")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper mapper;
    @PostMapping
    public ResponseEntity postBoard(@RequestBody BoardDto.Post boardDto,
                                    Authentication authentication) {
        User principal = (User) authentication.getPrincipal();

        Board board = boardService.createBoard(mapper.boardPostDtoToBoard(boardDto), principal.getUsername());
        return new ResponseEntity(mapper.boardToBoardResponseDto(board), HttpStatus.CREATED);
    }
    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive long boardId,
                                     @RequestBody BoardDto.Patch boardDto) {
        boardDto.setId(boardId);

        Board board = boardService.updateBoard(mapper.boardPatchDtoToBoard(boardDto));
        return new ResponseEntity(mapper.boardToBoardResponseDto(board), HttpStatus.OK);
    }
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId) {
        Board board = boardService.findBoard(boardId);
        return new ResponseEntity(mapper.boardToBoardResponseDto(board), HttpStatus.OK);
    }

}
