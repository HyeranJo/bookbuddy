package com.bookbuddy.demo.bookmark.mapper;

import com.bookbuddy.demo.bookmark.dto.BookmarkDto;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface BookmarkMapper {
    default List<BookmarkDto.Response> bookmarksToBookmarkResponseDtos(List<Bookmark> bookmarks) {
        return bookmarks.stream()
                .map(e->new BookmarkDto.Response(
                        e.getId(),
                        e.getBook(),
                        e.getMember()
                )).collect(Collectors.toList());
    }
}
