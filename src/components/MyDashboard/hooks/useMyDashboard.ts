import { useQuery } from 'react-query';
import { getBuyingTradeList, getSellingTradeList, getWishList, ITradeDetail } from '@libs/apis/my';
import { IDropped } from '@libs/apis/landing';

function useMyDashboard() {
  const buyingQuery = useQuery<ITradeDetail[]>('BUYING_TRADE_LIST', getBuyingTradeList);
  const sellingQuery = useQuery<ITradeDetail[]>('SELLING_TRADE_LIST', getSellingTradeList);
  const wishQuery = useQuery<IDropped[]>('WISH_LIST', getWishList);

  return [buyingQuery, sellingQuery, wishQuery] as const;
}

export default useMyDashboard;
