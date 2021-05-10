import { observable } from 'mobx';

export type IModal = 'appDownloadGuide' | 'favoriteSelector';
export interface IModalStore {
  appDownloadGuide: {
    visible: boolean;
  };
  favoriteSelector: {
    visible: boolean;
  };
  openModal: (type: IModal) => void;
  closeModal: (type: IModal) => void;
}

export const ModalStore = observable<IModalStore>({
  appDownloadGuide: {
    visible: false,
  },
  favoriteSelector: {
    visible: false,
  },
  openModal(type) {
    this[type].visible = true;
  },
  closeModal(type) {
    this[type].visible = false;
  },
});
