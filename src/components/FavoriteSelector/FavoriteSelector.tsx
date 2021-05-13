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

function FavoriteSelector({}: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { closeModalWithDelay } = useModal();

  const onClose = useCallback(() => {
    closeModalWithDelay('favoriteSelector', ref, 350);
  }, []);

  useOutSideClick(ref, onClose);

  return (
    <BasicModal>
      <StyledFavoriteSelector ref={ref}>
        <div className="header">
          <h2>관심 상품 추가</h2>
        </div>
      </StyledFavoriteSelector>
    </BasicModal>
  );
}

const StyledFavoriteSelector = styled.div`
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
  }
`;

export default FavoriteSelector;
