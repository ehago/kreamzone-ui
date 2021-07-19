import styled from 'styled-components';

interface IProps {
  Header: React.ReactNode;
  NoticeBar?: React.ReactNode;
  Content: React.ReactNode;
  GuideBanner?: React.ReactNode;
  Footer: React.ReactNode;
}

function BasicTemplate({ Header, NoticeBar, Content, GuideBanner, Footer }: IProps) {
  return (
    <StyledBasicTemplate>
      {Header}
      {NoticeBar && NoticeBar}
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
