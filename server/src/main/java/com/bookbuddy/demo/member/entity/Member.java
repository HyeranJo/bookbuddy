package com.bookbuddy.demo.member.entity;

import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.cart.entity.Cart;
import com.bookbuddy.demo.order.entity.Order;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@NoArgsConstructor
@ToString
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String email;
    @Column
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
    @JsonBackReference
    @OneToMany(mappedBy = "member")
    private List<Bookmark> bookmarks;
    @JsonBackReference
    @OneToMany(mappedBy = "member")
    private List<Cart> carts;
    @JsonBackReference
    @OneToMany(mappedBy = "member")
    private List<Board> boards;
    @JsonBackReference
    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Order> orders;

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public Member(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public void addBookmark(Bookmark bookmark) {
        bookmarks.add(bookmark);
        if(bookmark.getMember() != this) {
            bookmark.addMember(this);
        }
    }
    public void addCart(Cart cart) {
        carts.add(cart);
        if(cart.getMember() != this) {
            cart.addMember(this);
        }
    }
    public void addBoard(Board board) {
        boards.add(board);
        if(board.getMember() != this) {
            board.addMember(this);
        }
    }
    public void addOrder(Order order) {
        orders.add(order);
        if(order.getMember() != this) {
            order.addMember(this);
        }
    }
}
