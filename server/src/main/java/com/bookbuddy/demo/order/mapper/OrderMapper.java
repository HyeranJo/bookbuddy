package com.bookbuddy.demo.order.mapper;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OrderMapper {
    default Order orderPostDtoToOrder(OrderDto.Post orderDto) {
        return new Order(
                orderDto.getQuantity(),
                orderDto.getPrice()
        );
    }

    default Order orderPatchDtoToOrder(OrderDto.Patch orderDto) {
        return new Order(
                orderDto.getId(),
                orderDto.getQuantity()
        );
    }

    default OrderDto.Response orderToOrderResponseDto(Order order) {
        return new OrderDto.Response(
                order.getId(),
                order.getBook(),
                order.getQuantity(),
                order.getPrice()
        );
    }

    default List<OrderDto.Response> ordersToOrderResponseDtos(List<Order> orders) {
        return orders.stream()
                .map(e->new OrderDto.Response(
                        e.getId(),
                        e.getBook(),
                        e.getQuantity(),
                        e.getPrice()
                )).collect(Collectors.toList());
    }
}
