import AppIcon from '@components/AppIcon';
import styled from 'styled-components';
import cn from 'classnames';
import { useState } from 'react';

interface IProps {
  on: boolean;
}

function FavoriteButton({ on }: IProps) {
  const [_on, setOn] = useState(on);

  const onClick = () => {
    setOn((prev) => !prev);
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
    color: white;
    &.on {
      color: #222;
    }
  }
`;

export default FavoriteButton;
