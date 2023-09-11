import Styled_Book from './Book.style';
import { useNavigate } from 'react-router-dom';
import BookMarkIcon from '../../icons/BookMarkIcon';
import { postBookMark } from '../../api/PostApi';
import { useState } from 'react';
import { AccessTokenAtom } from '../../recoil/UserInfo';
import { useRecoilValue } from 'recoil';
// import BookMarkIcon from '../../icons/BookMarkIcon';

interface BookProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  bookmark?: boolean;
}

const Book = (props: BookProps) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(props.bookmark);
  const accessToken = useRecoilValue(AccessTokenAtom);

  return (
    <Styled_Book.container>
      <Styled_Book.wrapper>
        <Styled_Book.img
          src={props.image}
          onClick={() => {
            navigate(`/book/${props.id}`);
          }}
        />
      </Styled_Book.wrapper>
      <Styled_Book.icon
        onClick={() => {
          if (accessToken) {
            postBookMark(props.id, setIsClick);
          } else {
            alert('로그인 후 이용 가능합니다');
          }
        }}
      >
        <BookMarkIcon
          fill={
            isClick
              ? 'var(--primary-background-color)'
              : 'var(--book-background-color)'
          }
        />
      </Styled_Book.icon>
      <Styled_Book.content>
        <Styled_Book.name
          onClick={() => {
            navigate(`/book/${props.id}`);
          }}
        >
          {props.name}
        </Styled_Book.name>
        <Styled_Book.price>{props.price?.toLocaleString()}원</Styled_Book.price>
      </Styled_Book.content>
    </Styled_Book.container>
  );
};

export default Book;
