package com.bookbuddy.demo.category.controller;

import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.category.mapper.CategoryMapper;
import com.bookbuddy.demo.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final CategoryMapper mapper;

    @GetMapping
    public ResponseEntity findCategory() {
        List<Category> categorys = categoryService.findCategorys();
        return new ResponseEntity(mapper.categoryToCategoryResponseDto(categorys), HttpStatus.OK);
    }
}
