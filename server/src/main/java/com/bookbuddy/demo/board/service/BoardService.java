package com.bookbuddy.demo.board.service;

import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.repository.BoardRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class BoardService {
    private final MemberService memberService;
    private final BoardRepository boardRepository;

    @Transactional
    public Board createBoard(Board board, String email) {
        Member member = memberService.findMember(email);
        member.addBoard(board);
        board.addMember(member);

        return boardRepository.save(board);
    }

    public Board findBoard(long boardId) {
        return findVerifyBoard(boardId);
    }

    private Board findVerifyBoard(long boardId) {
        Optional<Board> board = boardRepository.findById(boardId);
        return board.orElseThrow(() ->
                new BusinessException(ExceptionCode.BOARD_NOT_FOUND));
    }

    @Transactional
    public Board updateBoard(Board board) {
        Board findBoard = findVerifyBoard(board.getId());

        Optional.ofNullable(board.getTitle())
                .ifPresent(title->findBoard.setTitle(title));
        Optional.ofNullable(board.getContent())
                .ifPresent(content->findBoard.setContent(content));

        return boardRepository.save(findBoard);
    }

    @Transactional
    public void deleteBoard(long boardId) {
        Board findBoard = findVerifyBoard(boardId);

        boardRepository.delete(findBoard);
    }

    public Page<Board> findBoards(PageRequest pageRequest) {
        return boardRepository.findAll(pageRequest);
    }
}
