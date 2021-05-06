import { useQuery } from 'react-query';
import { getNoti, INoti } from '@libs/apis/common';

function useNoti() {
  const query = useQuery<INoti[]>('NOTI', getNoti);
  return query;
}

export default useNoti;
