import BasicModal from '@components/BasicModal';
import useModal from '@hooks/useModal';
import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import SizeSelectArea from './SizeSelectArea';
import { enterWithFadeInBottom, exitWithFadeOutBottom } from '@libs/styles/animation';

interface IProps {}

function WishSelector({}: IProps) {
  const { closeModalWithDelay } = useModal();
  const ref = useRef<HTMLDivElement | null>(null);

  const onClose = useCallback(() => {
    // Exit 애니메이션을 위해 특정시간 딜레이 후 닫기 수행
    closeModalWithDelay('wishSelector', ref, 250);
  }, [ref]);

  const handleAddFavorite = () => {
    alert('준비중입니다.');
  };

  return (
    <BasicModal onClose={onClose}>
      <StyledWishSelector ref={ref}>
        <div className="header">
          <h2>관심 상품 추가</h2>
        </div>
        <div className="content">
          <ProductInfo />
          <SizeSelectArea onSelect={handleAddFavorite} />
          <div className="button-section">
            <button onClick={onClose}>확인</button>
          </div>
        </div>
      </StyledWishSelector>
    </BasicModal>
  );
}

const StyledWishSelector = styled.div`
  width: 440px;
  animation: ${enterWithFadeInBottom} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  &.exit {
    animation: ${exitWithFadeOutBottom} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .header > h2 {
    padding: 18px 50px 0;
    min-height: 60px;
    font-size: 18px;
    letter-spacing: -0.27px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }

  .content {
    .button-section {
      padding: 24px 32px 32px;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      button {
        width: 120px;
        border: 1px solid #222;
        padding: 0 18px;
        height: 42px;
        line-height: 40px;
        border-radius: 12px;
        font-size: 14px;
        letter-spacing: -0.14px;
        background-color: #fff;
        color: inherit;
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
        text-align: center;
        background-color: #fff;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        transition: 0.15s all ease-out;

        &:hover {
          background-color: #f9f9f9;
        }
      }
    }
  }
`;

export default WishSelector;
