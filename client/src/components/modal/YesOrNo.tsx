import React from 'react';
import Modal from 'react-modal';
import { useSetRecoilState } from 'recoil';
import { Styled_CSDeleteModal } from './YesOrNoModal.style';
import { isYesClickedAtom } from '../../recoil/Modal';

interface YesOrNoType {
  message: string;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const YesOrNo = ({ message, setIsOpen, isOpen }: YesOrNoType) => {
  const setIsYesClicked = useSetRecoilState(isYesClickedAtom);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '280px',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  /** 예 클릭 함수 */
  const clickYesHandler = () => {
    setIsYesClicked(true);
    setIsOpen(false);
  };

  /** 아니오 클릭 함수 */
  const clickNoHandler = () => {
    setIsYesClicked(false);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="PostCode Modal"
      appElement={document.getElementById('root') || undefined}
    >
      <div>{message}</div>
      <Styled_CSDeleteModal.Buttons>
        <button onClick={clickYesHandler}>예</button>
        <button onClick={clickNoHandler}>아니오</button>
      </Styled_CSDeleteModal.Buttons>
    </Modal>
  );
};

export default YesOrNo;
