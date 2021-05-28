import AppIcon from '@components/AppIcon';
import styled from 'styled-components';
import cn from 'classnames';
import { useState } from 'react';
import useModal from '@hooks/useModal';

interface IProps {
  on: boolean;
}

function InterestButton({ on }: IProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_on, setOn] = useState(on);
  const { openModal } = useModal();

  const onClick = () => {
    openModal('interestSelector');
  };

  return (
    <StyledInterestButton onClick={onClick}>
      <AppIcon type="interest" className={cn('interest-icon', { on: _on })} />
    </StyledInterestButton>
  );
}

const StyledInterestButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 86px;
  right: 9px;
  z-index: 1;
  width: 24px;
  height: 24px;
  cursor: pointer;

  .interest-icon {
    fill: white;
    &.on {
      fill: #222;
    }
  }
`;

export default InterestButton;
