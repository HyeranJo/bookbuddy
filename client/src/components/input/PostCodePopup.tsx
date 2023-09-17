import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Styled_Payment } from '../../pages/payment/Payment.styled';
import { useSetRecoilState } from 'recoil';
import { PostCodeAdrsAtom } from '../../recoil/PostCodeModal';

const PharmAddress = ({ scriptUrl }: { scriptUrl?: string }) => {
  const open = useDaumPostcodePopup(scriptUrl);
  const postCodeAdrs = useSetRecoilState(PostCodeAdrsAtom);

  const handleComplete = (data: any) => {
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      data.address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    postCodeAdrs({ 주소: data.address, 우편번호: data.zonecode });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    open({ onComplete: handleComplete });
    e.preventDefault();
  };
  return (
    <Styled_Payment.AdrBtn onClick={handleClick}>
      주소검색
    </Styled_Payment.AdrBtn>
  );
};

export default PharmAddress;
