package com.bookbuddy.demo.book.mapper;

import com.bookbuddy.demo.book.dto.BookDto;
import com.bookbuddy.demo.book.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface BookMapper {
    default List<BookDto.Response> BookToBookResponseDto(List<Book> dataList) {
        return dataList.stream()
                .map(e-> new BookDto.Response(
                            e.getId(),
                            e.getName(),
                            e.getAuthor(),
                            e.getPublisher(),
                            e.getPrice(),
                            e.getDate(),
                            e.getImgSrc()
                    )).collect(Collectors.toList());
    }
}
