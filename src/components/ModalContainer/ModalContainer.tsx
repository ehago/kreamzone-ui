import AppDownloadGuide from '@components/AppDownloadGuide';
import WishSelector from '@components/WishSelector';
import useStore from '@hooks/useStore';
import { Observer } from 'mobx-react';
import { createPortal } from 'react-dom';

interface IProps {}

const modalRoot = document.querySelector('#modal') as HTMLElement;

function ModalContainer({}: IProps) {
  const { ModalStore } = useStore();

  const { appDownloadGuide, wishSelector } = ModalStore;

  const modals = (
    <Observer>
      {
        () => (
          <>
            {appDownloadGuide.visible && <AppDownloadGuide />}
            {wishSelector.visible && <WishSelector />}
          </>
        ) //
      }
    </Observer>
  );

  return createPortal(modals, modalRoot);
}

export default ModalContainer;
