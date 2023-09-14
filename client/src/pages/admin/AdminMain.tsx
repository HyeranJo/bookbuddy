import OrderAdmin from '../../components/table/order_history/OrderAdmin';
import { Styled_Layout } from '../BlankPageLayout';

const AdminMain = () => {
  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <OrderAdmin />
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default AdminMain;
