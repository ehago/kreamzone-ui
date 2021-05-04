import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNoti from './hooks/useNoti';

interface IProps {}

function NoticeBar({}: IProps) {
  const notiQuery = useNoti();

  const visible = !!notiQuery.data?.length;

  // TODO: 공지가 2개 이상일 경우 슬라이더 효과 처리
  return (
    <StyledNoticeBar visible={visible}>
      {
        visible &&
          notiQuery.data?.map((noti) => (
            <Link
              key={noti.id}
              to={`/notice/${noti.id}`}
              className="notice" //
            >
              &nbsp;{noti.noti}&nbsp;
            </Link>
          )) //
      }
    </StyledNoticeBar>
  );
}

const StyledNoticeBar = styled.div<{ visible: boolean }>`
  padding: 0 40px;
  color: #fff;
  background-color: #111;
  text-align: center;
  z-index: 1000;
  transition: 0.5s all ease-out;
  overflow: hidden;
  height: ${(props) => (props.visible ? '32px' : '0px')};

  .notice {
    display: inline-block;
    padding: 8px 5px;
    color: #fff;
    font-size: 12px;
    letter-spacing: -0.06px;
  }
`;

export default NoticeBar;
