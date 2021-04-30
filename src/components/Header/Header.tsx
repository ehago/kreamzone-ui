// import Logo from '@components/Logo';
import SearchBox from '@components/SearchBox';
import styled from 'styled-components';
import AppIcon from '@components/AppIcon';
import { Link, useHistory } from 'react-router-dom';

interface IProps {}

const logoStyle = {
  width: '120px',
  height: '24px',
  cursor: 'pointer',
};

function Header({}: IProps) {
  const history = useHistory();

  return (
    <StyledHeader>
      <AppIcon
        type="logo"
        style={logoStyle}
        onClick={() => history.push('/')}
      />
      <StyledSearchBox>
        <SearchBox />
      </StyledSearchBox>
      <StyledGnb>
        <ul className="gnb-list">
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/notice">고객센터</Link>
          </li>
          <li>
            <Link to="my">마이 페이지</Link>
          </li>
          <li>
            <Link to="login">로그인</Link>
          </li>
        </ul>
      </StyledGnb>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 90px;
  padding: 0 32px 0 40px;
  background: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
`;

const StyledSearchBox = styled.div`
  margin: 0 26px 0 34px;
  flex: 1;
`;

const StyledGnb = styled.nav`
  margin-left: auto;

  .gnb-list {
    overflow: hidden;

    li {
      float: left;
      margin-left: 7px;
      padding: 10px 8px;
      display: block;
      font-size: 13px;
      letter-spacing: -0.07px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export default Header;
