package com.bookbuddy.demo.cart.service;

import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.cart.repository.CartRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import com.bookbuddy.demo.cart.dto.CartDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final BookService bookService;
    private final MemberService memberService;
    @Transactional
    public Cart createCart(String email, Cart cart, CartDto.Post cartDto) {
        String bookId = cartDto.getId();
        Member member = memberService.findMember(email);
        cart.addBook(bookService.findVerifyBook(bookId));
        cart.addMember(member);
        member.addCart(cart);

        return cartRepository.save(cart);
    }

    @Transactional
    public Cart updateCart(Cart cart) {
        Cart findCart = findVerifyCart(cart.getId());

        Optional.ofNullable(cart.getQuantity())
                        .ifPresent(quantity->findCart.setQuantity(quantity));

        return cartRepository.save(findCart);
    }

    public List<Cart> findCarts(String email) {
        Member member = memberService.findMember(email);
        return cartRepository.findAllByMember(member);
    }
    public Cart findCart(long cartId) {
        return findVerifyCart(cartId);
    }

    @Transactional
    public void deleteCart(long cartId) {
        Cart findCart = findVerifyCart(cartId);
        cartRepository.delete(findCart);
    }

    private Cart findVerifyCart(long cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(()->new BusinessException(ExceptionCode.CART_NOT_FOUND));
    }
}
