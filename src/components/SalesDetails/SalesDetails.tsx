import styled from 'styled-components';

interface IProps {}

function SalesDetails({}: IProps) {
  return <StyledSalesDetails>sale</StyledSalesDetails>;
}

const StyledSalesDetails = styled.div`
  width: 1000px;
  height: 600px;
  overflow: hidden;
`;

export default SalesDetails;
