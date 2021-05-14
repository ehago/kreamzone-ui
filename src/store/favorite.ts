import { observable } from 'mobx';

export interface IFavorite {
  key: number;
  brand: string;
  imageUrl: string;
  productName: string;
  size: string;
}

export interface IFavoriteStore {
  favorites: IFavorite[];
  onAdd: (favorite: IFavorite) => void;
  onRemove: (key: number) => void;
}

export const FavoriteStore = observable<IFavoriteStore>({
  favorites: [],
  onAdd(favorite) {
    this.favorites.push(favorite);
  },
  onRemove(key) {
    this.favorites = this.favorites.filter((favorite) => favorite.key !== key);
  },
});
