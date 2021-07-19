import styled from 'styled-components';

interface IProps {
  background?: string; // background 색
  children: React.ReactNode;
}

function ModalPositioner({ background, children }: IProps) {
  return <StyledModalPositioner background={background}>{children}</StyledModalPositioner>;
}

const StyledModalPositioner = styled.div<{ background?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.background || 'rgba(34, 34, 34, 0.5)'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1010;
`;

export default ModalPositioner;
