import { observable } from 'mobx';

export type IModal = 'appDownloadGuide' | 'interestSelector';
export interface IModalStore {
  appDownloadGuide: {
    visible: boolean;
  };
  interestSelector: {
    visible: boolean;
  };
  openModal: (type: IModal) => void;
  closeModal: (type: IModal) => void;
}

export const ModalStore = observable<IModalStore>({
  appDownloadGuide: {
    visible: false,
  },
  interestSelector: {
    visible: false,
  },
  openModal(type) {
    this[type].visible = true;
  },
  closeModal(type) {
    this[type].visible = false;
  },
});
