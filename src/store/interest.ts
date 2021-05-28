import { observable } from 'mobx';

export interface IInterest {
  key: number;
  brand: string;
  imageUrl: string;
  productName: string;
  size: string;
}

export interface IInterestStore {
  interests: IInterest[];
  onAdd: (favorite: IInterest) => void;
  onRemove: (key: number) => void;
}

export const InterestStore = observable<IInterestStore>({
  interests: [],
  onAdd(interest) {
    this.interests.push(interest);
  },
  onRemove(key) {
    this.interests = this.interests.filter((interest) => interest.key !== key);
  },
});
