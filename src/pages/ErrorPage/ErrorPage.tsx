import ErrorTemplate from '@templates/ErrorTemplate';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Header from './Header';

interface IProps {}

function ErrorPage({}: IProps) {
  const history = useHistory();

  return (
    <ErrorTemplate Header={<Header />}>
      <ErrorContent>
        <img
          className="not-found-image"
          src="https://www.kream.co.kr/_nuxt/img/illust-err.80560ce.svg"
        />
        <div className="title">요청하신 페이지를 찾을 수 없습니다.</div>
        <div className="sub-title">
          주소가 올바르지 않거나 알 수 없는 오류로 인해
          <br />
          페이지를 찾을 수 없습니다.
        </div>
        <button
          className="home-button"
          onClick={() => history.push('/')} //
        >
          홈으로 가기
        </button>
      </ErrorContent>
    </ErrorTemplate>
  );
}

const ErrorContent = styled.div`
  text-align: center;
  .not-found-image {
    width: 360px;
    height: 240px;
  }

  .title {
    font-size: 20px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.2px;
    color: #000;
    margin-top: 20px;
  }

  .sub-title {
    color: rgba(0, 0, 0, 0.8);
    margin-top: 8px;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }

  .home-button {
    width: 103px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-top: 20px;
    cursor: pointer;
    line-height: 2;
    color: #000;
    outline: none;
    background: white;
  }
`;

export default ErrorPage;
