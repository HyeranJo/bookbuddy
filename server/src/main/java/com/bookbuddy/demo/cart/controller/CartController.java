package com.bookbuddy.demo.cart.controller;

import com.bookbuddy.demo.cart.dto.CartDto;
import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.cart.mapper.CartMapper;
import com.bookbuddy.demo.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;
    private final CartMapper mapper;
    /* 장바구니 */
    @PostMapping
    public ResponseEntity postCart(@RequestBody CartDto.Post cartDto,
                                   Authentication authentication) {
        User user = (User) authentication.getPrincipal();

        Cart createdCart = cartService.createCart(user.getUsername(), mapper.cartPostDtoToCart(cartDto), cartDto);
        return new ResponseEntity(mapper.cartToCartResponseDto(createdCart), HttpStatus.CREATED);
    }
    /* 장바구니 수량 업데이트 */
    @PatchMapping("/{cart-id}")
    public ResponseEntity patchOrder(@PathVariable("cart-id") @Positive long cartId,
                                     @RequestBody @Valid CartDto.Patch cartDto) {
        cartDto.setId(cartId);
        Cart cart = cartService.updateCart(mapper.cartPatchDtoToCart(cartDto));
        return new ResponseEntity(mapper.cartToCartResponseDto(cart), HttpStatus.OK);
    }
    /* 장바구니 내역 */
    @GetMapping
    public ResponseEntity getCarts(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        List<Cart> carts = cartService.findCarts(user.getUsername());

        return new ResponseEntity(mapper.cartsToCartResponseDtos(carts), HttpStatus.OK);
    }
    /* 장바구니 삭제 */
    @DeleteMapping("/{cart-id}")
    public ResponseEntity deleteCart(@PathVariable("cart-id") @Positive long cartId) {
        cartService.deleteCart(cartId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
