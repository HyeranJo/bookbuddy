import React from 'react';
import { Styled_Payment } from './Payment.styled';
import { Styled_Layout } from '../BlankPageLayout';
import CallNumber from '../../components/input/CallNumber';

const Payment = () => {
  return (
    <>
      <Styled_Layout.Container className="container">
        <Styled_Layout.Div_WithNoSidebar>
          <Styled_Payment.Content>
            <Styled_Layout.H1>배송주소</Styled_Layout.H1>
            <Styled_Payment.Address>
              <div className="shipping-ddress">
                <Styled_Payment.Table id="shipping-ddress-table">
                  <colgroup>
                    <col style={{ width: '15%' }}></col>
                    <col style={{ width: '20%' }}></col>
                    <col style={{ width: '65%' }}></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>이름*</td>
                      <td colSpan={2}>
                        <input />
                      </td>
                    </tr>
                    <tr>
                      <td>배송주소*</td>
                      <td colSpan={2}>
                        <input />
                        <button>주소찾기</button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>도로명 주소</td>
                      <td>
                        <input />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>지번 주소</td>
                      <td>
                        <input />
                      </td>
                    </tr>
                    <tr>
                      <td>휴대폰*</td>
                      <td colSpan={2}>
                        <CallNumber defaultValue="010" />
                      </td>
                    </tr>
                    <tr>
                      <td>일반전화</td>
                      <td colSpan={2}>
                        <CallNumber />
                      </td>
                    </tr>
                  </tbody>
                </Styled_Payment.Table>
              </div>
              <div className="orderer-info">
                <Styled_Payment.SubTitle>
                  <h2>주문고객</h2>
                  <form>
                    <input
                      type="radio"
                      name="inputstyle"
                      id="새로입력"
                      value="새로입력"
                      checked
                    />
                    <label htmlFor="inputstyle">새로 입력</label>
                    <input
                      type="radio"
                      name="inputstyle"
                      id="배송정보와동일"
                      value="배송정보와동일"
                    />
                    <label htmlFor="inputstyle">배송정보와 동일</label>
                  </form>
                </Styled_Payment.SubTitle>
                <Styled_Payment.Table id="orderer-info-table">
                  <colgroup>
                    <col style={{ width: '25%' }}></col>
                    <col style={{ width: '75%' }}></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>이름</td>
                      <td>
                        <input />
                      </td>
                    </tr>
                    <tr>
                      <td>휴대폰</td>
                      <td>
                        <CallNumber defaultValue="010" />
                      </td>
                    </tr>
                    <tr>
                      <td>일반전화</td>
                      <td>
                        <CallNumber />
                      </td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>
                        <input />
                      </td>
                    </tr>
                  </tbody>
                </Styled_Payment.Table>
              </div>
            </Styled_Payment.Address>
          </Styled_Payment.Content>
        </Styled_Layout.Div_WithNoSidebar>
      </Styled_Layout.Container>
    </>
  );
};

export default Payment;
