import CSAdmin from '../../components/table/cs_apply/CSAdmin';
import OrderAdmin from '../../components/table/order_history/OrderAdmin';
import { Styled_Layout } from '../BlankPageLayout';
import { Styled_AdminMain } from './AdminMain.style';

const AdminMain = () => {
  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <Styled_AdminMain.Container>
          <OrderAdmin width={1300} />
          <CSAdmin width={1300} />
        </Styled_AdminMain.Container>
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default AdminMain;
