import styled from 'styled-components';

interface IProps {}

function MyAddress({}: IProps) {
  return <StyledMyAddress>MyAddress</StyledMyAddress>;
}

const StyledMyAddress = styled.div`
  overflow: hidden;
`;

export default MyAddress;
