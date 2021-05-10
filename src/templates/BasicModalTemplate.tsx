import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  width: string;
}

function BasicModalTemplate({ width, children }: IProps) {
  return (
    <ModalPositioner>
      <ModalWrapper width={width}>{children}</ModalWrapper>
    </ModalPositioner>
  );
}

const ModalPositioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 1010;
`;

const ModalWrapper = styled.div<{ width: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  width: ${(props) => props.width};
`;

export default BasicModalTemplate;
