package com.bookbuddy.demo.order.mapper;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OrderMapper {
    default List<Order> orderPostDtosToOrders(List<OrderDto.Post> orderDto) {
        return orderDto.stream()
                .map(e-> new Order(
                        e.getQuantity(),
                        e.getPrice()
                )).collect(Collectors.toList());
    }

    default List<OrderDto.Response> ordersToOrderResponseDtos(List<Order> order) {
        return order.stream()
                .map(e->new OrderDto.Response(
                        e.getBook(),
                        e.getQuantity(),
                        e.getPrice()
                )).collect(Collectors.toList());
    }
}
