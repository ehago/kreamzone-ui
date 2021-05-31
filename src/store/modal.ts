import { observable } from 'mobx';

export type IModal = 'appDownloadGuide' | 'wishSelector';
export interface IModalStore {
  appDownloadGuide: {
    visible: boolean;
  };
  wishSelector: {
    visible: boolean;
  };
  openModal: (type: IModal) => void;
  closeModal: (type: IModal) => void;
}

export const ModalStore = observable<IModalStore>({
  appDownloadGuide: {
    visible: false,
  },
  wishSelector: {
    visible: false,
  },
  openModal(type) {
    this[type].visible = true;
  },
  closeModal(type) {
    this[type].visible = false;
  },
});
