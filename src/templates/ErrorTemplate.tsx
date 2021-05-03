import styled from 'styled-components';

interface IProps {
  Header: React.ReactNode;
  children: React.ReactNode;
}

function ErrorTemplate({ Header, children }: IProps) {
  return (
    <StyledErrorTemplate>
      {Header}
      {children}
    </StyledErrorTemplate>
  );
}

const StyledErrorTemplate = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ErrorTemplate;
