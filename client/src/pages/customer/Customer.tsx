import Styled_Customer from './Customer.style';
import AskTable from '../../components/table/cs_apply/CSTable';
import FAQ from '../../components/table/FAQ';
import { useRecoilValue } from 'recoil';
import { AccessTokenAtom } from '../../recoil/UserInfo';

const Customer = () => {
  const accessToken = useRecoilValue(AccessTokenAtom);

  return (
    <>
      <Styled_Customer.Main>
        <Styled_Customer.Section>
          <Styled_Customer.Title>고객센터</Styled_Customer.Title>
          <Styled_Customer.Warpper>
            <FAQ />
            {accessToken && <AskTable title="1:1 문의내역" />}
          </Styled_Customer.Warpper>
        </Styled_Customer.Section>
      </Styled_Customer.Main>
    </>
  );
};

export default Customer;
