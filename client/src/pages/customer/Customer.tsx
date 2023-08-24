import { styled } from 'styled-components';
import { Styled_Layout } from '../BlankPageLayout';
import AskTable from '../../components/category/AskTable';
import FAQ from '../../components/category/FAQ';

const Customer = () => {
  return (
    <>
      <Styled_Customer.Main>
        <Styled_Customer.Title>고객센터</Styled_Customer.Title>
        <Styled_Customer.Section>
          <FAQ />
          {/* <AskTable title="1:1 문의내역" /> */}
        </Styled_Customer.Section>
      </Styled_Customer.Main>
    </>
  );
};

export default Customer;

const Styled_Customer = {
  Main: styled(Styled_Layout.Container)`
    flex-direction: column;
  `,
  Section: styled(Styled_Layout.Div_WithNoSidebar)``,
  Title: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 20px;
    /* display: inline-block; */
    /* justify-self: flex-start; */
  `,
};
