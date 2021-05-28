import styled from 'styled-components';

interface IProps {}

function MyProfile({}: IProps) {
  return <StyledMyProfile>MyProfile</StyledMyProfile>;
}

const StyledMyProfile = styled.div`
  overflow: hidden;
`;

export default MyProfile;
