import Axios from '@libs/axios';

export interface INoti {
  id: number;
  noti: string;
}

// 공지사항 API
const getNoti = async (): Promise<INoti[]> => {
  const response = await Axios.get(`${process.env.REACT_APP_API_SERVER}/data/kream/noti`);
  return response.data;
};

export { getNoti };
