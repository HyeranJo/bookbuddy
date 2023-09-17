import Styled_Customer from './Customer.style';
import AskTable from '../../components/table/cs_apply/CSTable';
import FAQ from '../../components/table/FAQ';
import { useRecoilValue } from 'recoil';
import { AccessTokenAtom } from '../../recoil/UserInfo';
import { Styled_Layout } from '../BlankPageLayout';

const Customer = () => {
  const accessToken = useRecoilValue(AccessTokenAtom);

  return (
    <>
      <Styled_Layout.Container>
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_Customer.Container>
            <Styled_Layout.H1>고객센터</Styled_Layout.H1>
            <Styled_Customer.Warpper>
              <FAQ />
              {accessToken && <AskTable title="1:1 문의내역" width={1300} />}
            </Styled_Customer.Warpper>
          </Styled_Customer.Container>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
    </>
  );
};

export default Customer;
