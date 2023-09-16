import React from 'react';
import Modal from 'react-modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IsOpenModalAtom, CSPatchClickedAtom } from '../../recoil/CS';
import { DeleteCSItem } from '../../api/DeleteApi';
import { Styled_CSDeleteModal } from './AskDeleteModal.style';
import { postCSData } from '../../api/PostApi';
import { useNavigate } from 'react-router-dom';
import { patchCS, patchOrderStatus } from '../../api/PatchApi';
import { CSPatchType } from '../../model/CStype';
import { patchOrderStatusType } from '../../model/paymentType';

interface YesOrNoModalType {
  message: string;
  modalName: string;
  // applyDelete
  id?: string;
  setDeleteClicked?: (deleteClicked: boolean) => void;
  // applyPost
  finalData?: {
    title: string;
    content: string;
  };
  // applyPatch
  finalPatchData?: CSPatchType;
  // orderDelete
  deleteOrderData?: patchOrderStatusType;
  setOrderDeleteClicked?: (deleteClicked: boolean) => void;
}

const YesOrNoModal = ({
  message,
  modalName,
  id,
  setDeleteClicked,
  finalData,
  finalPatchData,
  deleteOrderData,
  setOrderDeleteClicked,
}: YesOrNoModalType) => {
  const [isOpen, setIsOpen] = useRecoilState(IsOpenModalAtom);
  const navigate = useNavigate();
  const setCSPatchClicked = useSetRecoilState(CSPatchClickedAtom);

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

  /** 예 클릭 함수 */
  const clickYesHandler = () => {
    setIsOpen(false);

    // applyDelete 1:1 문의 내역 삭제
    if (modalName === 'applyDelete') {
      if (id && setDeleteClicked) {
        DeleteCSItem(id);
        setDeleteClicked(true);
      }
    }
    // applyPost 1:1 문의 등록
    else if (modalName === 'applyPost') {
      finalData &&
        postCSData(finalData).then(data =>
          navigate(`/customer/detail/${data.id}`),
        );
    }
    // applyPatch 1:1 문의 수정
    else if (modalName === 'applyPatch') {
      setCSPatchClicked(false);
      finalPatchData &&
        patchCS(finalPatchData)
          .then(() => {
            alert('수정한 내용이 등록되었습니다');
            navigate(`/customer/detail/${finalPatchData.boardId}`);
          })
          .catch(err =>
            alert(`수정한 내용이 등록되지 않았습니다. error : ${err}`),
          );
    }
    // orderDelete 주문 내역 삭제
    else if (modalName === 'orderDelete') {
      deleteOrderData && patchOrderStatus(deleteOrderData);
      setOrderDeleteClicked && setOrderDeleteClicked(true);
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
        <div>{message}</div>
        <Styled_CSDeleteModal.Buttons>
          <button onClick={clickYesHandler}>예</button>
          <button onClick={clickNoHandler}>아니오</button>
        </Styled_CSDeleteModal.Buttons>
      </Modal>
    </>
  );
};

export default YesOrNoModal;
