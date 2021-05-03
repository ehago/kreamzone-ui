import styled from 'styled-components';

interface IProps {}

function ServiceArea({}: IProps) {
  return (
    <StyledServiceArea>
      <FooterMenuBox>
        <div className="menu-box">
          <strong>이용 안내</strong>
          <ul className="menu-list">
            <li className="menu-item">검수기준</li>
            <li className="menu-item">이용정책</li>
            <li className="menu-item">패널티 정책</li>
            <li className="menu-item">커뮤니티 가이드라인</li>
          </ul>
        </div>
        <div className="menu-box">
          <strong>고객 지원</strong>
          <ul className="menu-list">
            <li className="menu-item">공지사항</li>
            <li className="menu-item">서비스 소개</li>
            <li className="menu-item">쇼룸 안내</li>
            <li className="menu-item">판매자 방문접수</li>
          </ul>
        </div>
      </FooterMenuBox>
      <CustomerService>
        <strong className="service-title">
          고객센터
          <span className="tel">1588-7813</span>
        </strong>
        <ul className="service-time">
          <li>
            운영시간
            <span className="tel">
              평일 11:00 - 18:00 (토 ∙ 일, 공휴일 휴무)
            </span>
          </li>
          <li>
            점심시간
            <span className="tel">평일 13:00 - 14:00</span>
          </li>
        </ul>
        <div className="service-noti">1:1 문의하기는 앱에서만 가능합니다.</div>
        <div className="question-button-wrapper">
          <button className="question-button">자주 묻는 질문</button>
        </div>
      </CustomerService>
    </StyledServiceArea>
  );
}

const StyledServiceArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
  border-bottom: 1px solid #ebebeb;
`;

const FooterMenuBox = styled.div`
  display: flex;

  .menu-box {
    width: 160px;
    &:nth-child(2) {
      margin-left: 80px;
    }
  }

  .menu-list {
    padding-top: 16px;
  }

  .menu-item {
    margin-top: 12px;
    font-size: 14px;
    letter-spacing: -0.21px;
    color: rgba(34, 34, 34, 0.5);
    cursor: pointer;
    &:first-child {
      margin-top: 0;
    }
  }
`;

const CustomerService = styled.div`
  .service-title {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: -0.16px;
    font-weight: 700;
    .tel {
      margin-left: 4px;
      letter-spacing: normal;
      cursor: pointer;
    }
  }
  .service-time {
    padding-top: 8px;
    li {
      line-height: 17px;
      padding-top: 4px;
      &:first-child {
        padding-top: 0;
      }

      font-size: 13px;
      letter-spacing: -0.07px;
      color: rgba(34, 34, 34, 0.5);
    }
  }
  .service-noti {
    padding-top: 8px;
    font-size: 13px;
    letter-spacing: -0.07px;
  }
  .question-button-wrapper {
    padding-top: 17px;
    .question-button {
      outline: none;
      border: 1px solid #222;
      background: #222;
      color: #fafafa;
      height: 34px;
      font-size: 12px;
      line-height: 32px;
      padding: 0 14px;
      cursor: pointer;
      &:active {
        background-color: rgba(34, 34, 34, 0.8);
        color: hsla(0, 0%, 100%, 0.8);
      }
    }
  }
`;

export default ServiceArea;
