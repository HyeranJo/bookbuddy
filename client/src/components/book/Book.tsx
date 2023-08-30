import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import Styled_Book from './Book.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BookProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  // onClick?: () => void;
}

const Book = (props: BookProps) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  function ClickBookmark() {
    setIsClick(isClick => !isClick);
  }

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
      <Styled_Book.icon onClick={ClickBookmark}>
        <Bookmark
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
        <Styled_Book.price>{props.price || 5000}원</Styled_Book.price>
      </Styled_Book.content>
    </Styled_Book.container>
  );
};

export default Book;
