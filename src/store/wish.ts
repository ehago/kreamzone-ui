import { observable } from 'mobx';

export interface IWish {
  key: number;
  brand: string;
  imageUrl: string;
  productName: string;
  size: string;
}

export interface IWishStore {
  wishs: IWish[];
  onAdd: (favorite: IWish) => void;
  onRemove: (key: number) => void;
}

export const WishStore = observable<IWishStore>({
  wishs: [],
  onAdd(wish) {
    this.wishs.push(wish);
  },
  onRemove(key) {
    this.wishs = this.wishs.filter((wish) => wish.key !== key);
  },
});
