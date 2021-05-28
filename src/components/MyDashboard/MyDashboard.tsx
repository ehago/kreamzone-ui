import styled from 'styled-components';

interface IProps {}

function MyDashboard({}: IProps) {
  return <StyledMyDashboard>MyDashboard</StyledMyDashboard>;
}

const StyledMyDashboard = styled.div`
  overflow: hidden;
`;

export default MyDashboard;
