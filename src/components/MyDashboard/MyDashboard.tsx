import styled from 'styled-components';
import useMyDashboard from './hooks/useMyDashboard';
import TradeDetails from './TradeDetails';
import UserInfo from './UserInfo';
import WishDetails from './WishDetails';

interface IProps {}

function MyDashboard({}: IProps) {
  const [buyingQuery, sellingQuery, wishQuery] = useMyDashboard();

  const { isLoading: buyingListLoading, data: buyingList } = buyingQuery;
  const { isLoading: sellingListLoading, data: sellingList } = sellingQuery;
  const { isLoading: wishListLoading, data: wishList } = wishQuery;

  return (
    <StyledMyDashboard>
      <UserInfo />
      <TradeDetails
        type="buying"
        isLoading={buyingListLoading}
        tradeList={buyingList} //
      />
      <TradeDetails
        type="selling"
        isLoading={sellingListLoading}
        tradeList={sellingList} //
      />
      <WishDetails
        isLoading={wishListLoading}
        wishList={wishList} //
      />
    </StyledMyDashboard>
  );
}

const StyledMyDashboard = styled.div`
  overflow: hidden;
`;

export default MyDashboard;
