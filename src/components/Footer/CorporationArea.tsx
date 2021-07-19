import AppIcon from '@components/AppIcon';
import styled from 'styled-components';

interface IProps {}

function CorporationArea({}: IProps) {
  return (
    <StyledCorporationArea>
      <ul className="term-list">
        <li className="bold">개인정보처리방침</li>
        <li>이용약관</li>
      </ul>
      <div className="sns-box">
        <AppIcon type="instagram" onClick={() => alert('준비중입니다.')} />
        <AppIcon type="facebook" onClick={() => alert('준비중입니다.')} />
        <AppIcon type="channel" onClick={() => alert('준비중입니다.')} />
      </div>
      <div className="business-info">
        <div className="info-list">
          <dl className="info-item">크림 주식회사 · 대표 김창욱</dl>
          <dl className="info-item">사업자등록번호: 570-88-01618 사업자정보확인</dl>
          <dl className="info-item">통신판매업 제 2021-성남분당C-0093호</dl>
        </div>
        <div className="info-list">
          <dl className="info-item">사업장소재지: 경기도 성남시 분당구 분당내곡로 117, 8층</dl>
          <dl className="info-item">개인정보관리책임자: 김미진</dl>
          <dl className="info-item">호스팅 서비스: 네이버 클라우드 (주)</dl>
        </div>
      </div>
    </StyledCorporationArea>
  );
}

const StyledCorporationArea = styled.div`
  position: relative;
  margin-top: 30px;

  .term-list {
    padding-bottom: 16px;
    display: flex;
    li {
      margin-right: 20px;
      font-size: 14px;
      letter-spacing: -0.21px;
      color: #000;
      cursor: pointer;
      &.bold {
        font-weight: 700;
      }
    }
  }

  .sns-box {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 115px;
    svg {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  .business-info {
    .info-list {
      &::after {
        clear: both;
        display: block;
        content: '';
      }
      .info-item {
        float: left;
        margin-left: 17px;
        line-height: 20px;
        font-size: 13px;
        letter-spacing: -0.07px;
        color: rgba(34, 34, 34, 0.5);
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export default CorporationArea;
