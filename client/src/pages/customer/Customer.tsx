import Styled_Customer from './Customer.style';
import AskTable from '../../components/table/AskTable';
import FAQ from '../../components/table/FAQ';

const Customer = () => {
  return (
    <>
      <Styled_Customer.Main>
        <Styled_Customer.Title>고객센터</Styled_Customer.Title>
        <Styled_Customer.Section>
          <FAQ />
          <AskTable title="1:1 문의내역" />
        </Styled_Customer.Section>
      </Styled_Customer.Main>
    </>
  );
};

export default Customer;
