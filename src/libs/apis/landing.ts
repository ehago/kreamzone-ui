import Axios from '@libs/axios';

export interface IDropped {
  brand: {
    name: string;
    image: string;
    background: string;
  };
  eng_name: string;
  image: string;
  immediately_purchase_price: number;
  item_id: number;
}

// 발매 상품 API
const getDropped = async (): Promise<IDropped[]> => {
  const response = await Axios.get(`${process.env.REACT_APP_API_SERVER}/items/dropped`);
  return response.data;
};

export { getDropped };
