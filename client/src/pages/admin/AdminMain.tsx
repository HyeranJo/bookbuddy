import AdminFull from '../../components/table/order_history/AdminFull';
import { Styled_Layout } from '../BlankPageLayout';

const AdminMain = () => {
  return (
    <Styled_Layout.Container>
      <Styled_Layout.Div_WithNoSidebar>
        <AdminFull />
      </Styled_Layout.Div_WithNoSidebar>
    </Styled_Layout.Container>
  );
};

export default AdminMain;
