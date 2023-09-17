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
    ${DeviceQuery.tablet`
      margin-bottom: calc(20px / ${screenScale.tablet});
      font-size: calc(var(--subtitle-font-size) / ${screenScale.tablet});
    `}
  `,
  Question: styled.div`
    width: 1300px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--light-border-color);
    padding-left: 40px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
      height: calc(50px / ${screenScale.bigScreen});
      padding: calc(40px / ${screenScale.bigScreen}) 20px;
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
      height: calc(50px / ${screenScale.desktop});
      padding: calc(40px / ${screenScale.desktop}) 20px;
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
      height: calc(50px / ${screenScale.tablet});
      padding: calc(40px / ${screenScale.tablet}) 20px;
    `}
  `,
  QuestionTitle: styled.h2`
    font-size: var(--third-title-font-size);
    width: 1300px;
    display: flex;
    justify-content: space-between;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
      font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
      font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
      font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
    `}
  `,
  ArrowWrapper: styled.div`
    cursor: pointer;
  `,
  AnswerContainer: styled.div`
    width: 1300px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
    `}
  `,
  Answer: styled.div`
    padding: 45px;
    font-size: var(--basic-font-size);
    background-color: var(--category-color);

    ${DeviceQuery.bigScreen`
      padding: calc(45px / ${screenScale.bigScreen});
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      padding: calc(45px / ${screenScale.desktop});
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      padding: calc(45px / ${screenScale.tablet});
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
    `}
  `,
};

export default Styled_FQA;
