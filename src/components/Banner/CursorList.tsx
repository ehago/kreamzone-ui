import styled from 'styled-components';
import cn from 'classnames';
import { IBanner } from './Banner';

interface IProps {
  banners: IBanner[];
  cursor: number;
  onClick: (cursor: number) => void;
}

function CursorList({ banners, cursor, onClick }: IProps) {
  const cursorColor = banners[cursor].cursorColor;
  const activeCursorColor = banners[cursor].activeCursorColor;

  return (
    <StyledCursorList
      cursorColor={cursorColor}
      activeCursorColor={activeCursorColor}
    >
      {
        Array.from({ length: banners.length }, (_, i) => (
          <li
            key={i}
            className={cn({ active: i === cursor })}
            onClick={() => onClick(i)}
          />
        )) //
      }
    </StyledCursorList>
  );
}

const StyledCursorList = styled.ul<{
  cursorColor: string;
  activeCursorColor: string;
}>`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  li {
    margin-right: 12px;
    cursor: pointer;
    width: 8px;
    height: 8px;
    background: ${(props) => props.cursorColor};
    border-radius: 50%;
    &.active {
      background: ${(props) => props.activeCursorColor};
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default CursorList;
