import AppIcon from '@components/AppIcon';
import styled from 'styled-components';

interface IProps {
  disabled?: boolean;
  onClick: () => void;
}

function GoogleLoginButton({ disabled = false, onClick }: IProps) {
  return (
    <StyledGoogleLoginButton disabled={disabled} onClick={onClick}>
      {/* <AppIcon type="naver" /> */}
      <AppIcon type="googleLogin" />
      구글 로그인
    </StyledGoogleLoginButton>
  );
}

const StyledGoogleLoginButton = styled.button`
  position: relative;
  background-color: #d85147;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
  height: 52px;
  line-height: 50px;
  border-radius: 12px;
  border: none;
  outline: none;

  svg {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50%;
    margin-top: -18px;
    left: 18px;
    fill: white;
  }
`;

export default GoogleLoginButton;
