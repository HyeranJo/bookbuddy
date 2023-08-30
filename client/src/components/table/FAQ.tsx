import Styled_FQA from './FAQ.style';
import { ReactComponent as ArrowDown } from '../.././icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../.././icons/arrowUp.svg';
import { useState } from 'react';
import { FAQdata } from './faqData';

const FAQ = () => {
  return (
    <Styled_FQA.Container>
      <Styled_FQA.Title>FAQ</Styled_FQA.Title>
      {FAQdata.map((el, idx) => {
        const [isDown, setIsDown] = useState(false);

        const handleDropdownToggle = () => {
          setIsDown(!isDown);
          console.log(isDown);
        };
        return (
          <>
            <Styled_FQA.Question key={idx}>
              <Styled_FQA.QuestionTitle>{el.title}</Styled_FQA.QuestionTitle>
              <Styled_FQA.ArrowWrapper onClick={handleDropdownToggle}>
                {isDown ? <ArrowUp /> : <ArrowDown />}
              </Styled_FQA.ArrowWrapper>
            </Styled_FQA.Question>
            {isDown && (
              <Styled_FQA.AnswerContainer>
                <Styled_FQA.Answer>{el.answer}</Styled_FQA.Answer>
              </Styled_FQA.AnswerContainer>
            )}
          </>
        );
      })}
    </Styled_FQA.Container>
  );
};

export default FAQ;
