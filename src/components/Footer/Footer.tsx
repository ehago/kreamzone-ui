import styled from 'styled-components';
import CorporationArea from './CorporationArea';
import NoticeArea from './NoticeArea';
import ServiceArea from './ServiceArea';

interface IProps {}

function Footer({}: IProps) {
  return (
    <StyledFooter>
      <ServiceArea />
      <CorporationArea />
      <NoticeArea />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 50px 40px;
  border-top: 1px solid #ebebeb;
`;

export default Footer;
