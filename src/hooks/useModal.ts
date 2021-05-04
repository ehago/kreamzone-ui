import { IModal } from '@store/modal';
import useStore from './useStore';

function useModal() {
  const { ModalStore } = useStore();

  const openModal = (type: IModal) => {
    ModalStore.openModal(type);
  };

  const closeModal = (type: IModal) => {
    ModalStore.closeModal(type);
  };

  return { openModal, closeModal };
}

export default useModal;
