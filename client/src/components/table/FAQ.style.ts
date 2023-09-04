import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

const Styled_FQA = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    margin-bottom: 20px;
    font-size: var(--subtitle-font-size);

    ${DeviceQuery.bigScreen`
      margin-bottom: calc(20px / ${screenScale.bigScreen});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      margin-bottom: calc(20px / ${screenScale.desktop});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.desktop});
    `}
  `,
  Question: styled.div`
    width: 1095px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--light-border-color);
    padding-left: 25px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
      height: calc(50px / ${screenScale.bigScreen});
      padding-left: calc(25px / ${screenScale.bigScreen})
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
      height: calc(50px / ${screenScale.desktop});
      padding-left: calc(25px / ${screenScale.desktop})
    `}
  `,
  QuestionTitle: styled.h2`
    font-size: var(--third-title-font-size);
    width: 1000px;
    ${DeviceQuery.bigScreen`
      width: calc(1000px / ${screenScale.bigScreen});
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1000px / ${screenScale.desktop});
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
    `}
  `,
  ArrowWrapper: styled.div`
    cursor: pointer;
  `,
  AnswerContainer: styled.div`
    width: 1095px;

    ${DeviceQuery.bigScreen`
      width: calc(1095px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1095px / ${screenScale.desktop});
    `}
  `,
  Answer: styled.div`
    padding: 25px;
    font-size: var(--basic-font-size);
    background-color: var(--category-color);

    ${DeviceQuery.bigScreen`
      padding: calc(25px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      padding: calc(25px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
  `,
};

export default Styled_FQA;
