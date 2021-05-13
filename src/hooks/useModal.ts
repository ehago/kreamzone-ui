import { IModal } from '@store/modal';
import React from 'react';
import useStore from './useStore';

function useModal() {
  const { ModalStore } = useStore();

  const openModal = (type: IModal) => {
    ModalStore.openModal(type);
  };

  const closeModal = (type: IModal) => {
    ModalStore.closeModal(type);
  };

  // 애니메이션이 적용된 모달을 닫을때 사용하는 함수
  // 1. exit 애니메이션 적용을 위해 exit 클래스 추가
  // 2. delay 이후 모달 닫기 수행
  const closeModalWithDelay = (
    type: IModal,
    ref: React.MutableRefObject<HTMLDivElement | null>,
    delay: number,
  ) => {
    if (ref.current) {
      ref.current.classList.add('exit');
      setTimeout(() => {
        ModalStore.closeModal(type);
      }, delay);
    }
  };

  return { openModal, closeModal, closeModalWithDelay };
}

export default useModal;
