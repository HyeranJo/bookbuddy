package com.bookbuddy.demo.admin.reply.mapper;

import com.bookbuddy.demo.admin.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.reply.entity.Reply;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ReplyMapper {
    default Reply replyPostDtoToReply(ReplyDto.Post replyDto) {
        return new Reply(replyDto.getContent());
    }

    default ReplyDto.Response replyToReplyResponseDto(Reply reply) {
        return new ReplyDto.Response(
                reply.getBoard().getId(),
                reply.getContent()
        );
    }
}
