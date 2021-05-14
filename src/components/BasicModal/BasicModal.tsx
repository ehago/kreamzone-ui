import ModalPositioner from '@components/ModalPositioner';
import useOutSideClick from '@hooks/useOutSideClick';
import { useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  background?: string;
  onClose: () => void;
  children: React.ReactNode;
}

function BasicModal({ background, children, onClose }: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useOutSideClick(ref, onClose);

  return (
    <ModalPositioner background={background}>
      <StyledModalWrapper ref={ref}>{children}</StyledModalWrapper>
    </ModalPositioner>
  );
}

const StyledModalWrapper = styled.div`
  width: auto;
  height: auto;

  & > div {
    background-color: #fff;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  }
`;

export default BasicModal;
