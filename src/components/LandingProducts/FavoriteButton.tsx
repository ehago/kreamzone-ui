import AppIcon from '@components/AppIcon';
import styled from 'styled-components';
import cn from 'classnames';
import { useState } from 'react';
import useModal from '@hooks/useModal';

interface IProps {
  on: boolean;
}

function FavoriteButton({ on }: IProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_on, setOn] = useState(on);
  const { openModal } = useModal();

  const onClick = () => {
    openModal('favoriteSelector');
  };

  return (
    <StyledFavoriteButton onClick={onClick}>
      <AppIcon type="favorite" className={cn('favorite-icon', { on: _on })} />
    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 86px;
  right: 9px;
  z-index: 1;
  width: 24px;
  height: 24px;
  cursor: pointer;

  .favorite-icon {
    fill: white;
    &.on {
      fill: #222;
    }
  }
`;

export default FavoriteButton;
