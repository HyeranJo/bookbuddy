package com.bookbuddy.demo.board.service;

import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.repository.BoardRepository;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final MemberService memberService;
    private final BoardRepository boardRepository;
    public Board createBoard(Board board, String email) {
        Member member = memberService.findMember(email);
        member.addBoard(board);
        board.addMember(member);

        return boardRepository.save(board);
    }
}
