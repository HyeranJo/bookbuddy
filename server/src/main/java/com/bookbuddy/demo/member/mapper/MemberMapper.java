package com.bookbuddy.demo.member.mapper;

import com.bookbuddy.demo.member.dto.MemberDto;
import com.bookbuddy.demo.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.Post memberDto);
}
