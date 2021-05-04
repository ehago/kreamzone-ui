import AppDownloadGuide from '@components/AppDownloadGuide';
import useStore from '@hooks/useStore';
import { useObserver } from 'mobx-react';
import { createPortal } from 'react-dom';

interface IProps {}

const modalRoot = document.querySelector('#modal') as HTMLElement;

function ModalContainer({}: IProps) {
  const { ModalStore } = useStore();

  const { appDownloadGuide } = ModalStore;

  const modals = useObserver(() => (
    <>
      {appDownloadGuide.visible && <AppDownloadGuide ModalStore={ModalStore} />}
      {/* {other modals..} */}
    </>
  ));

  return createPortal(modals, modalRoot);
}

export default ModalContainer;
