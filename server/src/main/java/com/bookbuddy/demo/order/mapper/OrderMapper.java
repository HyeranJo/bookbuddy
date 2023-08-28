package com.bookbuddy.demo.order.mapper;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper {
    default Order orderPostDtoToOrder(OrderDto.Post orderDto) {
        return new Order(
                orderDto.getQuantity(),
                orderDto.getPrice()
        );
    }

    OrderDto.Response orderToOrderResponseDto(Order order);
}
