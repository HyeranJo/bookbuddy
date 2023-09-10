package com.bookbuddy.demo.board.entity;

import com.bookbuddy.demo.audit.Auditable;
import com.bookbuddy.demo.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.parameters.P;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
public class Board extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String title;
    @Column
    private String content;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name="MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
        if(! member.getBoards().contains(this)) {
            member.getBoards().add(this);
        }
    }

    public Board(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Board(long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
