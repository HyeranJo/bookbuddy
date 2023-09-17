package com.bookbuddy.demo.member.mapper;

import com.bookbuddy.demo.member.dto.MemberDto;
import com.bookbuddy.demo.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.http.HttpStatus;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    default Member memberPostDtoToMember(MemberDto.Post memberDto) {
        Member member = new Member(
            memberDto.getEmail(),
            memberDto.getPassword()
        );
        return member;
    }

    default MemberDto.Response memberToMemberResponseDto(Member member) {
        return new MemberDto.Response(
            member.getEmail(),
            member.getPassword()
        );
    }
}
