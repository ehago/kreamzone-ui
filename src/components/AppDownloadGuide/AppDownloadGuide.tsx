import AppIcon from '@components/AppIcon';
import BasicModal from '@components/BasicModal';
import useModal from '@hooks/useModal';
import useOutSideClick from '@hooks/useOutSideClick';
import {
  enterWithFadeInBottom,
  exitWithFadeOutBottom,
} from '@libs/styles/animation';
import { useCallback, useRef } from 'react';
import styled from 'styled-components';

interface IProps {}

// TODO: 휴대폰번호 입력 부분 마크업 및 스타일링 보완
function AppDownloadGuide({}: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { closeModalWithDelay } = useModal();

  const onClose = useCallback(() => {
    closeModalWithDelay('appDownloadGuide', ref, 350);
  }, []);

  useOutSideClick(ref, onClose);

  return (
    <BasicModal>
      <StyledAppDownloadGuide ref={ref}>
        <div className="top">
          <p>앱 설치하여 사용해주세요!</p>
          <div className="qrcode">
            <img
              src="https://kream.co.kr/_nuxt/img/img_qr.f79040b.jpg"
              alt="qr 코드"
            />
          </div>
        </div>
        <div className="bottom">
          <p>
            휴대폰 번호를 입력해주시면,
            <br />앱 설치 주소를 메시지로 보내드립니다.
          </p>
          <div className="input-phone-box"></div>
          <div className="app-download-checkbox"></div>
        </div>
        <button className="close-button" onClick={onClose}>
          <AppIcon type="close" />
        </button>
      </StyledAppDownloadGuide>
    </BasicModal>
  );
}

const StyledAppDownloadGuide = styled.div`
  position: relative;
  width: 424px;
  animation: ${enterWithFadeInBottom} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  &.exit {
    animation: ${exitWithFadeOutBottom} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .top {
    padding: 40px 32px 0;
    background-color: #fff;
    text-align: center;

    p {
      font-size: 20px;
      letter-spacing: -0.3px;
      font-weight: 700;
    }

    .qrcode {
      padding: 26px 0 30px;

      img {
        width: 130px;
        height: 130px;
      }
    }
  }

  .bottom {
    padding: 32px 32px 38px;
    background-color: #fafafa;

    p {
      font-size: 14px;
      letter-spacing: -0.21px;
      color: rgba(34, 34, 34, 0.8);
    }

    .input-phone-box {
      margin-top: 12px;
      position: relative;
      border-radius: 8px;
      border: 1px solid #d3d3d3;
      padding: 10px 75px 11px 10px;
      background-color: #fff;
    }

    .app-download-checkbox {
      padding-top: 12px;
      text-align: left;
    }
  }

  .close-button {
    position: absolute;
    top: 18px;
    right: 24px;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;

    svg {
      fill: rgb(34, 34, 34);
      width: 24px;
      height: 24px;
    }
  }
`;

export default AppDownloadGuide;
