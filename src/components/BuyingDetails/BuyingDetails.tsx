import styled from 'styled-components';

interface IProps {}

function BuyingDetails({}: IProps) {
  return <StyledBuyingDetails>buying</StyledBuyingDetails>;
}

const StyledBuyingDetails = styled.div`
  width: 1000px;
  height: 600px;
  overflow: hidden;
`;

export default BuyingDetails;
