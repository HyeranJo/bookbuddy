package com.bookbuddy.demo.bookmark.service;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.bookmark.entity.Bookmark;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final MemberService memberService;
    private final BookService bookService;
    public void createBookmark(String email, String bookId) {
        // 북마크가 이미 있다면 해지
        // 없다면 생성
        Member findMember = memberService.findMember(email);
        Book findBook = bookService.findBook(bookId);
//        if(isFindBookmark(findMember, findBook)) {
//            book
//        } else {
            Bookmark bookmark = new Bookmark();

            bookmark.addMember(findMember);
            bookmark.addBook(findBook);
//        }
    }
}
