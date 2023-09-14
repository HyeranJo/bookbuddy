package com.bookbuddy.demo.board.entity;

import com.bookbuddy.demo.admin.cs.reply.entity.Reply;
import com.bookbuddy.demo.audit.Auditable;
import com.bookbuddy.demo.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.parameters.P;

import javax.persistence.*;
import java.time.LocalDateTime;

import static com.bookbuddy.demo.board.entity.Board.BOARD_STATUS.BOARD_STATUS_RECEIPT;

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
    @OneToOne(mappedBy = "board")
    private Reply reply;
    @Enumerated(value=EnumType.ORDINAL)
    private BOARD_STATUS status = BOARD_STATUS_RECEIPT;

    public enum BOARD_STATUS {
        BOARD_STATUS_RECEIPT("접수"),
        BOARD_STATUS_COMPLETED("답변완료");

        private String status;
        BOARD_STATUS(String status) {
            this.status = status;
        }
    }

    public void addMember(Member member) {
        this.member = member;
        if(! member.getBoards().contains(this)) {
            member.getBoards().add(this);
        }
    }
    public void addReply(Reply reply) {
        this.reply = reply;
        if(this.reply.getBoard() != this) {
            this.reply.addBoard(this);
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

    public void setStatus(BOARD_STATUS status) {
        this.status = status;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
