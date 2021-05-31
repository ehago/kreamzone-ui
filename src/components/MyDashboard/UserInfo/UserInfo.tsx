import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {}

function UserInfo({}: IProps) {
  return (
    <StyledUserInfo>
      <StyledUserDetails>
        <div className="user-thumb">
          <img
            src="https://kream.co.kr/_nuxt/img/blank_profile.4347742.png"
            alt="사용자 이미지"
            className="user-thumb-img"
          />
        </div>
        <div className="user-info">
          <div>
            <strong className="name">Douzone</strong>
            <p className="email">douzone@example.com</p>
            <Link to="/my/profile" type="button" className="modify-button">
              프로필 수정
            </Link>
          </div>
        </div>
      </StyledUserDetails>
      <StyledMembershipDetails>
        <div>
          <strong>일반 회원</strong>
          <p>회원 등급</p>
        </div>
        <div>
          <strong>0P</strong>
          <p>포인트</p>
        </div>
      </StyledMembershipDetails>
    </StyledUserInfo>
  );
}

const StyledUserInfo = styled.div`
  display: flex;
  padding: 23px 0 23px 24px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  background-color: #fff;
`;
const StyledUserDetails = styled.div`
  display: flex;

  .user-thumb {
    display: flex;
    margin-right: 12px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .user-info {
    display: flex;
    align-items: center;

    strong.name {
      font-size: 20px;
      letter-spacing: -0.1px;
      font-weight: 700;
      color: #000;
    }
    p.email {
      font-size: 14px;
      letter-spacing: -0.07px;
      color: rgba(34, 34, 34, 0.5);
    }
    .modify-button {
      border: 1px solid #d3d3d3;
      color: rgba(34, 34, 34, 0.8);
      font-size: 12px;
      letter-spacing: -0.06px;
      padding: 0 14px;
      height: 34px;
      line-height: 32px;
      border-radius: 10px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      text-align: center;
      background-color: #fff;
      margin-top: 12px;
      align-self: flex-start;
      transition: 0.15s all linear;

      &:hover {
        background: #ecececcc;
      }
    }
  }
`;

const StyledMembershipDetails = styled.div`
  position: relative;
  margin-left: auto;
  display: table;
  table-layout: fixed;
  height: 100px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    background-color: #ebebeb;
    width: 1px;
  }

  & > div {
    display: table-cell;
    width: 160px;
    vertical-align: middle;
    text-align: center;

    strong {
      font-size: 16px;
      letter-spacing: -0.16px;
    }
    p {
      font-size: 13px;
      letter-spacing: -0.07px;
      color: rgba(34, 34, 34, 0.5);
    }
  }
`;

export default UserInfo;
