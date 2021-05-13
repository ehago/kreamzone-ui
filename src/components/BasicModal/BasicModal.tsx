import ModalPositioner from '@components/ModalPositioner';
import styled from 'styled-components';

interface IProps {
  background?: string;
  children: React.ReactNode;
}

function BasicModal({ background, children }: IProps) {
  return (
    <ModalPositioner background={background}>
      <StyledModalWrapper>{children}</StyledModalWrapper>
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
