import styled from 'styled-components';

interface IProps {
  Header: React.ReactNode;
  Content: React.ReactNode;
  GuideBanner?: React.ReactNode;
  Footer: React.ReactNode;
}

function BasicTemplate({ Header, Content, GuideBanner, Footer }: IProps) {
  return (
    <StyledBasicTemplate>
      {Header}
      {Content}
      {GuideBanner && GuideBanner}
      {Footer}
    </StyledBasicTemplate>
  );
}

const StyledBasicTemplate = styled.div`
  padding-top: 90px;
  position: relative;
`;

export default BasicTemplate;
