package com.bookbuddy.demo.global.dto.response;

import com.bookbuddy.demo.global.dto.PageInfo;
import com.bookbuddy.demo.order.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.util.MultiValueMap;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private PageInfo pageInfo;
    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(
                page.getNumber() + 1,
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages()
        );
    }
}
