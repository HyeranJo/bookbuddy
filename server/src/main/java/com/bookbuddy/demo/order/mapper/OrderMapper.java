package com.bookbuddy.demo.order.mapper;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.order.repository.OrderRepository;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OrderMapper {
    Order orderPostDtoToOrder(OrderDto.Post orderDto);

    OrderDto.Response orderToOrderResponseDto(Order order);
}
