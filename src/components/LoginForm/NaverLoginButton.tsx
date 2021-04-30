import AppIcon from '@components/AppIcon';
import styled from 'styled-components';

interface IProps {
  disabled?: boolean;
  onClick: () => void;
  children: string;
}

function NaverLoginButton({ disabled = false, onClick, children }: IProps) {
  return (
    <StyledNaverLoginButton disabled={disabled} onClick={onClick}>
      <AppIcon type="naver" />
      {children}
    </StyledNaverLoginButton>
  );
}

const StyledNaverLoginButton = styled.button`
  position: relative;
  background-color: #5ac451;
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
    width: 20px;
    height: 18px;
    top: 50%;
    margin-top: -9px;
    left: 18px;
    fill: white;
  }
`;

export default NaverLoginButton;
