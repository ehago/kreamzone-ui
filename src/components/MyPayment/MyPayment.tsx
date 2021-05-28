import styled from 'styled-components';

interface IProps {}

function MyPayment({}: IProps) {
  return <StyledMyPayment>MyPayment</StyledMyPayment>;
}

const StyledMyPayment = styled.div`
  overflow: hidden;
`;

export default MyPayment;
