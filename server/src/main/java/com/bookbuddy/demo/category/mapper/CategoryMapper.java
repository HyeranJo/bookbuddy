package com.bookbuddy.demo.category.mapper;

import com.bookbuddy.demo.category.dto.CategoryDto;
import com.bookbuddy.demo.category.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CategoryMapper {
    default List<CategoryDto.Response> categoryToCategoryResponseDto(List<Category> categorys) {
        return categorys.stream()
                .map(e->new CategoryDto.Response(e.getId(), e.getName()))
                .collect(Collectors.toList());
    }
}
