import React from 'react';
import DaumPostcode from 'react-daum-postcode';
// import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  PostCodeAdrsAtom,
  PostCodeModalAtom,
} from '../../recoil/PostCodeModal';

const PostCode = () => {
  // const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useRecoilState(PostCodeModalAtom);
  const postCodeAdrs = useSetRecoilState(PostCodeAdrsAtom);

  // 주소 선택 이벤트
  const handle = {
    selectAddress: (data: any) => {
      // console.log(`
      //            주소: ${data.address},
      //            우편번호: ${data.zonecode}
      //        `);
      // setOpenPostcode(false);
      postCodeAdrs({ 주소: data.address, 우편번호: data.zonecode });
    },
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="PostCode Modal"
        appElement={document.getElementById('root') || undefined}
      >
        <DaumPostcode
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
        />
      </Modal>
    </>
  );
};

export default PostCode;
