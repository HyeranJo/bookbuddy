import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Styled_Book2 } from './Book2.style';
import { BookInfo } from '../../model/BookList';

const Book2 = ({
  id,
  name,
  price,
  imgSrc,
  author,
  date,
  publisher,
}: BookInfo) => {
  const navigate = useNavigate();

  return (
    <Styled_Book2.container>
      <Styled_Book2.wrapper>
        <Styled_Book2.img
          src={imgSrc}
          onClick={() => {
            navigate(`/book/${id}`);
          }}
        />
      </Styled_Book2.wrapper>
      <Styled_Book2.Content>
        <Styled_Book2.Name
          onClick={() => {
            navigate(`/book/${id}`);
          }}
        >
          {name}
        </Styled_Book2.Name>
        <Styled_Book2.Info>
          <Styled_Book2.Span>
            출간일: {new Date(date).toLocaleDateString()}
          </Styled_Book2.Span>
          <Styled_Book2.Span>
            {author} / {publisher}
          </Styled_Book2.Span>
        </Styled_Book2.Info>
        <Styled_Book2.Span>{price?.toLocaleString()} 원</Styled_Book2.Span>
      </Styled_Book2.Content>
    </Styled_Book2.container>
  );
};

export default Book2;
