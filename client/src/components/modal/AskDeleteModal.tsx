import React from 'react';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import { AskDeleteModal } from '../../recoil/CS';
import { DeleteCSItem } from '../../api/DeleteApi';
import { Styled_CSDeleteModal } from './AskDeleteModal.style';

interface ApplyDeleteModalType {
  // 1:1 문의 내역 삭제
  id?: string;
  setDeleteClicked?: (deleteClicked: boolean) => void;
}

const ApplyDeleteModal = ({ id, setDeleteClicked }: ApplyDeleteModalType) => {
  const [isOpen, setIsOpen] = useRecoilState(AskDeleteModal);

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

  /** 예 클릭(삭제) 함수 */
  const clickYesHandler = () => {
    setIsOpen(false);

    // 1:1 문의 내역 삭제
    if (id && setDeleteClicked) {
      DeleteCSItem(id);
      setDeleteClicked(true);
    }
  };

  /** 아니오 클릭 함수 */
  const clickNoHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="PostCode Modal"
        appElement={document.getElementById('root') || undefined}
      >
        <div>정말 삭제하시겠습니까?</div>
        <Styled_CSDeleteModal.Buttons>
          <button onClick={clickYesHandler}>예</button>
          <button onClick={clickNoHandler}>아니오</button>
        </Styled_CSDeleteModal.Buttons>
      </Modal>
    </>
  );
};

export default ApplyDeleteModal;
