package com.bookbuddy.demo.order.mapper;

import com.bookbuddy.demo.order.dto.OrderDto;
import com.bookbuddy.demo.order.entity.Order;
import com.bookbuddy.demo.orderbook.OrderBookDto;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OrderMapper {
    default Order orderPostDtoToOrder(OrderDto.Post orderDto) {
        return new Order(
                orderDto.getShipName(),
                orderDto.getAddress1(),
                orderDto.getAddress2(),
                orderDto.getShipMobile(),
                orderDto.getShipTel(),
                orderDto.getCstmrName(),
                orderDto.getCstmrMobile(),
                orderDto.getCstmrTel(),
                orderDto.getEmail()
        );
    }

    default OrderDto.Response orderToOrderResponseDto(Order order) {
        List<OrderBookDto.Response> orderBooks = order.getOrderBooks().stream()
                .map(e-> new OrderBookDto.Response(e.getBook().getName()))
                .collect(Collectors.toList());

        return new OrderDto.Response(
                order.getId(),
                orderBooks,
                order.getCreatedAt(),
                order.getStatus().getMessage());
    }

    default List<OrderDto.Response> ordersToOrderResponseDtos(List<Order> orders) {
        return orders.stream().map(order-> {
            List<OrderBookDto.Response> orderBooks = order.getOrderBooks().stream()
                    .map(e-> new OrderBookDto.Response(e.getBook().getName()))
                    .collect(Collectors.toList());

            return new OrderDto.Response(
                    order.getId(),
                    orderBooks,
                    order.getCreatedAt(),
                    order.getStatus().getMessage());
        }).collect(Collectors.toList());
    }
}
