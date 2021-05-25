import styled from 'styled-components';

interface IProps {
  Header: React.ReactNode;
  Navigation: React.ReactNode;
  Footer: React.ReactNode;
  children: React.ReactNode;
}

function NavigationTemplate({ Header, Navigation, Footer, children }: IProps) {
  return (
    <StyledNavigationTemplate>
      {Header}
      <StyledContent>
        {Navigation}
        {children}
      </StyledContent>
      {Footer}
    </StyledNavigationTemplate>
  );
}

const StyledNavigationTemplate = styled.div`
  padding-top: 90px;
  position: relative;
`;

const StyledContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 40px 160px;
`;

export default NavigationTemplate;
