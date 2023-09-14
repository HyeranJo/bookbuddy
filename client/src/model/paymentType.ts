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

export interface OrderHistoryType {
  data: {
    id: string;
    orderBooks: { bookName: string }[];
    createdAt: string;
    status:
      | '주문완료'
      | '결제완료'
      | '배송준비중'
      | '배송중'
      | '배송완료'
      | '취소';
  }[];
  pageInfo: PageInfo;
}

export interface patchOrderStatusType {
  orderIds: string[];
  orderStatus:
    | '주문완료'
    | '결제완료'
    | '배송준비중'
    | '배송중'
    | '배송완료'
    | '취소';
}
