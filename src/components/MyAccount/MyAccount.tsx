import styled from 'styled-components';

interface IProps {}

function MyAccount({}: IProps) {
  return <StyledMyAccount>MyAccount</StyledMyAccount>;
}

const StyledMyAccount = styled.div`
  overflow: hidden;
`;

export default MyAccount;
