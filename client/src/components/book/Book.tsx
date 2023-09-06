import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import Styled_Book from './Book.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../utils/cookie';
import BookMarkIcon from '../../icons/BookMarkIcon';

interface BookProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  bookmark?: boolean;
}

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const Book = (props: BookProps) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(props.bookmark);

  const postBookMark = async (id: string | undefined) => {
    try {
      const response = await axios.post(
        `${SERVER_HOST}/bookmark/${id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: getCookie('accessToken'),
          },
        },
      );
      const result = response.data;
      setIsClick(result);
      return result;
    } catch (error) {
      alert(error);
    }
  };

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
          postBookMark(props.id);
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
