package com.bookbuddy.demo.cart.mapper;

import com.bookbuddy.demo.cart.dto.CartDto;
import com.bookbuddy.demo.cart.entity.Cart;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CartMapper {
    default Cart cartPostDtoToCart(CartDto.Post cartDto) {
        return new Cart(
                cartDto.getQuantity(),
                cartDto.getPrice()
        );
    }

    default Cart cartPatchDtoToCart(CartDto.Patch cartDto) {
        return new Cart(
                cartDto.getId(),
                cartDto.getQuantity()
        );
    }

    default CartDto.Response cartToCartResponseDto(Cart cart) {
        return new CartDto.Response(
                cart.getId(),
                cart.getBook(),
                cart.getQuantity(),
                cart.getPrice()
        );
    }

    default List<CartDto.Response> cartsToCartResponseDtos(List<Cart> carts) {
        return carts.stream()
                .map(e->new CartDto.Response(
                        e.getId(),
                        e.getBook(),
                        e.getQuantity(),
                        e.getPrice()
                )).collect(Collectors.toList());
    }
}
