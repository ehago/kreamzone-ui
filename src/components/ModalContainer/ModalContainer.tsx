import AppDownloadGuide from '@components/AppDownloadGuide';
import FavoriteSelector from '@components/FavoriteSelector';
import useStore from '@hooks/useStore';
import { useObserver } from 'mobx-react';
import { createPortal } from 'react-dom';

interface IProps {}

const modalRoot = document.querySelector('#modal') as HTMLElement;

function ModalContainer({}: IProps) {
  const { ModalStore } = useStore();

  const { appDownloadGuide, favoriteSelector } = ModalStore;

  const modals = useObserver(() => (
    <>
      {appDownloadGuide.visible && <AppDownloadGuide ModalStore={ModalStore} />}
      {favoriteSelector.visible && <FavoriteSelector ModalStore={ModalStore} />}
      {/* {other modals..} */}
    </>
  ));

  return createPortal(modals, modalRoot);
}

export default ModalContainer;
