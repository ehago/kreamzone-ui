import useOutSideClick from '@hooks/useOutSideClick';
import { IModalStore } from '@store/modal';
import BasicModalTemplate from '@templates/BasicModalTemplate';
import { useCallback, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  ModalStore: IModalStore;
}

function FavoriteSelector({ ModalStore }: IProps) {
  const ref = useRef(null);

  const onClose = useCallback(() => {
    ModalStore.closeModal('favoriteSelector');
  }, []);

  useOutSideClick(ref, onClose);

  return (
    <BasicModalTemplate width="440px">
      <StyledFavoriteSelector ref={ref}>
        <div className="header">
          <h2>관심 상품 추가</h2>
        </div>
      </StyledFavoriteSelector>
    </BasicModalTemplate>
  );
}

const StyledFavoriteSelector = styled.div`
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
