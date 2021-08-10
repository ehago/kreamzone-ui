import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputBox from './InputBox';
import LoginButton from './LoginButton';
import GoogleLoginButton from './GoogleLoginButton';

interface IProps {}

function LoginForm({}: IProps) {
  return (
    <StyledLoginForm>
      <div className="inner-wrapper">
        <div className="login-title" />
        <InputBox type="text" label="이메일 주소" placeholder="예) kream@kream.co.kr" error={false} errorMessage="이메일 주소를 정확히 입력해주세요." />
        <InputBox type="text" label="비밀번호" error={false} errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)" />
        <div className="login-button-wrapper">
          <LoginButton
            disabled={false}
            onClick={() => console.log('clicked')} //
          >
            로그인
          </LoginButton>
          <GoogleLoginButton disabled={false} onClick={() => console.log('clicked')} />
        </div>
        <ul className="account-find-list">
          <li className="account-find-item">
            <Link to="join">이메일 가입</Link>
          </li>
          <li className="account-find-item">
            <Link to="login/find_email">이메일 찾기</Link>
          </li>
          <li className="account-find-item">
            <Link to="login/find_password">비밀번호 찾기</Link>
          </li>
        </ul>
      </div>
    </StyledLoginForm>
  );
}

const StyledLoginForm = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;

  .inner-wrapper {
    margin: 0 auto;
    padding: 60px 0 160px;
    width: 400px;

    .login-title {
      margin: 0 auto;
      margin-bottom: 50px;
      text-align: center;
      font-size: 0;
      width: 250px;
      height: 56px;
      background: url('https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png') no-repeat;
      background-size: 250px 56px;
    }

    .login-button-wrapper {
      padding-top: 45px;
      button + * {
        margin-top: 8px;
      }
    }

    .account-find-list {
      margin-top: 18px;
      display: flex;
      justify-content: space-evenly;

      .account-find-item {
        display: inline-flex;
        align-items: flex-start;
        flex: 1;

        a {
          margin: auto;
          padding: 0 10px;
          display: inline-flex;
          font-size: 13px;
          letter-spacing: -0.07px;
        }
      }

      .account-find-item:nth-child(2)::before,
      .account-find-item:nth-child(3)::before {
        content: '';
        margin-top: 3px;
        display: inline-block;
        width: 1px;
        height: 13px;
        background-color: #d3d3d3;
      }
    }
  }
`;

export default LoginForm;
