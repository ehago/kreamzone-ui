import { useQuery } from 'react-query';
import { getNoti } from '@libs/apis/common';

export interface INoti {
  id: number;
  noti: string;
}

function useNoti() {
  const query = useQuery<INoti[]>('NOTI', getNoti);
  return query;
}

export default useNoti;
