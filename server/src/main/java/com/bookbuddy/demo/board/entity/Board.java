package com.bookbuddy.demo.board.entity;

import com.bookbuddy.demo.audit.Auditable;
import com.bookbuddy.demo.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
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
}
