import GlobalStyle from '@libs/styles/global';
import styled from 'styled-components';

interface IProps {
  children: React.ReactChild;
}

function AppTemplate({ children }: IProps) {
  return (
    <StyledAppTemplate>
      <GlobalStyle />
      {children}
    </StyledAppTemplate>
  );
}

const StyledAppTemplate = styled.div``;

export default AppTemplate;
