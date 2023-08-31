package com.bookbuddy.demo.category.service;

import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.category.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
    public List<Category> getCategorys() {
        return categoryRepository.findAll();
    }
}
