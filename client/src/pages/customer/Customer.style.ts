import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';

const Styled_Customer = {
  Main: styled(Styled_Layout.Container)`
    flex-direction: column;
    padding-left: 200px;
  `,
  Section: styled(Styled_Layout.Div_WithNoSidebar)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    gap: 100px;
  `,
  Title: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    margin-top: 44px;
  `,
};

export default Styled_Customer;
