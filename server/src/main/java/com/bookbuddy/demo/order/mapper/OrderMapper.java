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
        List<Long> carts = order.getCarts().stream()
                .map(e -> e.getId()).collect(Collectors.toList());
        return new OrderDto.Response(
                order.getId(),
                carts,
                order.getShipName(),
                order.getAddress1(),
                order.getAddress2(),
                order.getShipMobile(),
                order.getShipTel(),
                order.getCstmrName(),
                order.getCstmrMobile(),
                order.getCstmrTel(),
                order.getEmail());
    }

    default List<OrderDto.Response> ordersToOrderResponseDtos(List<Order> orders) {
        return orders.stream().map(e-> {
            List<Long> carts = e.getCarts().stream()
                    .map(cart -> cart.getId()).collect(Collectors.toList());

            return new OrderDto.Response(
                    e.getId(),
                    carts,
                    e.getShipName(),
                    e.getAddress1(),
                    e.getAddress2(),
                    e.getShipMobile(),
                    e.getShipTel(),
                    e.getCstmrName(),
                    e.getCstmrMobile(),
                    e.getCstmrTel(),
                    e.getEmail());
        }).collect(Collectors.toList());
    }
}
