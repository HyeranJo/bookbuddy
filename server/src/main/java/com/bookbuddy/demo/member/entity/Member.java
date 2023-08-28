package com.bookbuddy.demo.member.entity;

import com.bookbuddy.demo.bookmark.entity.Bookmark;
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
    @OneToMany(mappedBy = "member")
    private List<Bookmark> bookmarks;

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
}
