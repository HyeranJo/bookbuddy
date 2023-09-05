import { styled } from 'styled-components';

const Styled_FQA = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    margin-bottom: 20px;
    font-size: var(--subtitle-font-size);
  `,
  Question: styled.div`
    width: 1095px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--light-border-color);
    padding-left: 25px;
  `,
  QuestionTitle: styled.h2`
    font-size: var(--third-title-font-size);
    width: 1000px;
  `,
  ArrowWrapper: styled.div`
    cursor: pointer;
  `,
  AnswerContainer: styled.div`
    width: 1095px;
  `,
  Answer: styled.div`
    padding: 25px;
    font-size: var(--basic-font-size);
    background-color: var(--category-color);
  `,
};

export default Styled_FQA;