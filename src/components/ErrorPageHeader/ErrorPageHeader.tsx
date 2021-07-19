import AppIcon from '@components/AppIcon';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface IProps {}

function ErrorPageHeader({}: IProps) {
  const history = useHistory();

  return (
    <StyledErrorPageHeader>
      <div
        className="logo"
        onClick={() => history.push('/')}
        //
      />
      <div className="sns-box">
        <AppIcon type="facebook" className="facebook icon" onClick={() => alert('준비중입니다.')} />
        <AppIcon type="instagram" className="instagram icon" onClick={() => alert('준비중입니다.')} />
      </div>
    </StyledErrorPageHeader>
  );
}

const StyledErrorPageHeader = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  .logo {
    width: 100px;
    height: 16px;
    background-image: url('https://www.kream.co.kr/_nuxt/img/sprite.ebdfa88.png');
    background-repeat: no-repeat;
    background-size: 250px 100px;
    background-position: 0 -30px;
    cursor: pointer;
  }

  .sns-box {
    .icon {
      width: 29px;
      height: 29px;
      cursor: pointer;
    }
    .facebook {
      margin-right: 24px;
    }
  }
`;

export default ErrorPageHeader;
