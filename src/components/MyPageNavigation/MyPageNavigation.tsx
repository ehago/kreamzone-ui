import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../Navigation';

interface IProps {}

function MyPageNavigation({}: IProps) {
  return (
    <StyledMyPageNavigation>
      <Link to="/my">
        <h2 className="title">MY PAGE</h2>
      </Link>
      <nav className="nav">
        <Navigation
          title="쇼핑 정보"
          navigations={[
            { to: '/my/buying', navigationText: '구매 내역' },
            { to: '/my/selling', navigationText: '판매 내역' },
            { to: '/my/wish', navigationText: '관심 상품' },
          ]}
        />
        <Navigation
          title="내 정보"
          navigations={[
            { to: '/my/profile', navigationText: '프로필 정보' },
            { to: '/my/address', navigationText: '주소록' },
            { to: '/my/payment', navigationText: '결제 정보' },
            { to: '/my/account', navigationText: '판매 정산 계좌' },
          ]}
        />
      </nav>
    </StyledMyPageNavigation>
  );
}

const StyledMyPageNavigation = styled.div`
  float: left;
  width: 160px;
  margin-right: 40px;

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }

  .title {
    padding-bottom: 25px;
    font-size: 32px;
    letter-spacing: -0.48px;
    color: #000;
    text-transform: uppercase;
  }
`;

export default MyPageNavigation;
