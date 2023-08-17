import { ReactComponent as Bookmark } from '../../icons/icon.svg';
import Styled_Book from './Book.style';
import { useState } from 'react';
import image from '../.././images/나의 라임 오렌지나무.jpg';

interface BookProps {
  name?: string;
  price?: number;
  image?: string;
}

const Book = (props: BookProps) => {
  const [isClick, setIsClick] = useState(false);

  function ClickBookmark() {
    setIsClick(isClick => !isClick);
  }

  return (
    <Styled_Book.container>
      <Styled_Book.wrapper>
        <Styled_Book.img src={image} />
      </Styled_Book.wrapper>
      <Styled_Book.icon onClick={ClickBookmark}>
        <Bookmark fill={isClick ? '#F54D42' : '#E2E2E2'} />
      </Styled_Book.icon>
      <Styled_Book.content>
        <Styled_Book.name>{props.name}</Styled_Book.name>
        <Styled_Book.price>{props.price || 5000}원</Styled_Book.price>
      </Styled_Book.content>
    </Styled_Book.container>
  );
};

/* Bookmark에 cursor: pointer가 적용되지 않고 onClick이벤트가 적용 되지 않았었다.
원인으로 margin-left 설정으로 Bookmark를 우측 배치했지만 실제로 겹쳐있는 요소가 있기 때문이였다.
그래서 다른 요소들과 겹치지 않도록 설정해주는게 필요했고 position: relative를 통하여 현재 위치 기준으로 상대적으로 이동할 수 있으며 left를 사용하여 우측으로 이동시켜주므로 다른 요소들과 겹치지 않고 독립적으로 위치를 잡을 수 있게 된것이다.
*/

export default Book;
