package com.bookbuddy.demo.board.mapper;

import com.bookbuddy.demo.board.dto.BoardDto;
import com.bookbuddy.demo.board.entity.Board;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

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
                board.getMember().getId()
        );
    }
}
