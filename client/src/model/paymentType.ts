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
  }[];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface IrderHistoryDataType {
  id: string;
  orderBooks: { bookName: string }[];
  createdAt: string;
}
