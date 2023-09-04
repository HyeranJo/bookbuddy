import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';

const Styled_Customer = {
  Main: styled(Styled_Layout.Container)`
    /* flex-direction: column; */
    padding-left: 200px;
  `,
  Section: styled(Styled_Layout.Div_WithNoSidebar)`
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    gap: 100px;
  `,
  Title: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    margin-top: 44px;
  `,
  Warpper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
  `,
};

export default Styled_Customer;
