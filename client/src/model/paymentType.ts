import { PageInfo } from './Pagination';

export interface PaymentType {
  shipName: string;
  address1: string;
  address2: string;
  shipMobile: string;
  shipTel?: string;
  cstmrName: string;
  cstmrMobile: string;
  cstmrTel?: string;
  email: string;
}

export interface OrderHistoryType extends PageInfo {
  data: {
    id: string;
    orderBooks: { bookName: string }[];
    createdAt: string;
  }[];
}
