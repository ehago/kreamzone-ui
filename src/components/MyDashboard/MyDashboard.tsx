import styled from 'styled-components';
import TradeDetails from './TradeDetails';
import UserInfo from './UserInfo';
import WishDetails from './WishDetails';

interface IProps {}

function MyDashboard({}: IProps) {
  return (
    <StyledMyDashboard>
      <UserInfo />
      <TradeDetails type="buying" />
      <TradeDetails type="selling" />
      <WishDetails />
    </StyledMyDashboard>
  );
}

const StyledMyDashboard = styled.div`
  overflow: hidden;
`;

export default MyDashboard;
