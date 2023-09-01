package com.bookbuddy.demo.category.service;

import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.category.repository.CategoryRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.bookbuddy.demo.global.exception.ExceptionCode.CATEGORY_NOT_FOUND;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    @Transactional
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
    public List<Category> findCategorys() {
        return categoryRepository.findAll();
    }
    public Category findVerifyCategory(long id) {
        return categoryRepository.findById(id)
                .orElseThrow(()->new BusinessException(CATEGORY_NOT_FOUND));
    }
}
