import { INoti } from '@components/NoticeBar/hooks/useNoti';
import Axios from '@libs/axios';

// 공지사항 API
const getNoti = async (): Promise<INoti[]> => {
  const response = await Axios.get('http://localhost:4000/data/kream/noti');
  return response.data;
};

export { getNoti };
