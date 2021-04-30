import styled from 'styled-components';

interface IProps {
  disabled?: boolean;
  onClick: () => void;
  children: string;
}

function LoginButton({ disabled = false, onClick, children }: IProps) {
  return (
    <StyledLoginButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledLoginButton>
  );
}

const StyledLoginButton = styled.button`
  color: #fff;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
  height: 52px;
  line-height: 50px;
  border-radius: 12px;
  border: none;
  outline: none;

  /* 임시 스타일링 */
  background-color: #ebebeb;
`;

export default LoginButton;
