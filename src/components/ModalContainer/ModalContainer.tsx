import AppDownloadGuide from '@components/AppDownloadGuide';
import FavoriteSelector from '@components/InterestSelector';
import useStore from '@hooks/useStore';
import { useObserver } from 'mobx-react';
import { createPortal } from 'react-dom';

interface IProps {}

const modalRoot = document.querySelector('#modal') as HTMLElement;

function ModalContainer({}: IProps) {
  const { ModalStore } = useStore();

  const { appDownloadGuide, interestSelector } = ModalStore;

  const modals = useObserver(() => (
    <>
      {/* 앱 다운로드 모달 */}
      {appDownloadGuide.visible && <AppDownloadGuide />}
      {/* 관심상품 추가 모달 */}
      {interestSelector.visible && <FavoriteSelector />}
      {/* {other modals..} */}
    </>
  ));

  return createPortal(modals, modalRoot);
}

export default ModalContainer;
