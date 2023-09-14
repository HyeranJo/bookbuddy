package com.bookbuddy.demo.board.mapper;

import com.bookbuddy.demo.board.dto.BoardDto;
import com.bookbuddy.demo.board.entity.Board;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface BoardMapper {
    default Board boardPostDtoToBoard(BoardDto.Post boardDto) {
        return new Board(
                boardDto.getTitle(),
                boardDto.getContent()
        );
    }

    default BoardDto.Response boardToBoardResponseDto(Board board) {
        return new BoardDto.Response(
                board.getId(),
                board.getTitle(),
                board.getContent(),
                board.getMember().getId(),
                board.getCreatedAt(),
                board.getStatus()
        );
    }

    default Board boardPatchDtoToBoard(BoardDto.Patch boardDto) {
        return new Board(
                boardDto.getId(),
                boardDto.getTitle(),
                boardDto.getContent()
        );
    }

    default List<BoardDto.Response> boardsToBoardResponseDtos(List<Board> boards) {
        return boards.stream()
                .map(e->new BoardDto.Response(
                        e.getId(),
                        e.getTitle(),
                        e.getContent(),
                        e.getMember().getId(),
                        e.getCreatedAt(),
                        e.getStatus()
                )).collect(Collectors.toList());
    }
}
