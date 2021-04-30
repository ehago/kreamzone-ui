import styled from 'styled-components';

interface IProps {}

function GuideBanner({}: IProps) {
  return (
    <StyledGuideBanner>
      <div className="service-guide-banner">
        <div className="inner-wrapper">
          <strong>SERVICE GUIDE</strong>
          <p>
            KREAM은 처음이지?
            <br />
            서비스 소개를 확인해보세요.
          </p>
          <span>서비스 안내</span>
        </div>
      </div>
      <div className="download-app-banner">
        <div className="inner-wrapper">
          <strong>DOWNLOAD THE APP</strong>
          <p>
            KREAM 앱을 설치하여
            <br />
            한정판 스니커즈를 FLEX 하세요!
          </p>
          <span>앱 설치하기</span>
        </div>
      </div>
    </StyledGuideBanner>
  );
}

const StyledGuideBanner = styled.div`
  display: flex;
  .service-guide-banner {
    cursor: pointer;
    background-color: #565656;
    background-image: url('https://kream.co.kr/_nuxt/img/home_banner_bottom1.79549cb.png');
    position: relative;
    padding: 36px 32px 0;
    width: 100%;
    height: 200px;
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 350px 200px;
  }
  .download-app-banner {
    cursor: pointer;
    background-color: #3b3a3c;
    background-image: url('https://kream.co.kr/_nuxt/img/home_banner_bottom2.0077547.png');
    position: relative;
    padding: 36px 32px 0;
    width: 100%;
    height: 200px;
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 350px 226px;
  }
  .inner-wrapper {
    max-width: 300px;
    color: #fff;

    strong {
      font-size: 12px;
      text-transform: uppercase;
    }
    p {
      padding-top: 12px;
      text-shadow: -1px 0 #565656, 0 1px #565656, 1px 0 #565656, 0 -1px #565656;
      font-size: 16px;
      letter-spacing: -0.16px;
    }
    span {
      margin-top: 16px;
      padding: 0 7px;
      display: inline-block;
      font-size: 12px;
      letter-spacing: -0.06px;
      height: 29px;
      line-height: 27px;
      border-radius: 6px;
      border: 1px solid hsla(0, 0%, 100%, 0.8);
      color: #fff;
    }
  }
`;

export default GuideBanner;
