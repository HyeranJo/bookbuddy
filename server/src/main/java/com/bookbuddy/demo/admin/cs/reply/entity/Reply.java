package com.bookbuddy.demo.admin.cs.reply.entity;

import com.bookbuddy.demo.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String content;
    @JoinColumn(name="BOARD_ID")
    @OneToOne
    private Board board;

    public Reply(String content) {
        this.content = content;
    }
    public void addBoard(Board board) {
        this.board = board;
        if(this.board.getReply() != this) {
            this.board.addReply(this);
        }
    }
}
