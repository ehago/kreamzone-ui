import styled from 'styled-components';
import AppIcon from '@components/AppIcon';

interface IProps {
  onSelect: () => void;
}

function SizeSelectArea({ onSelect }: IProps) {
  return (
    <StyledSizeSelectArea>
      {
        Array.from({ length: 15 }, (_, i) => (
          <div className="size-item" key={i} onClick={() => onSelect()}>
            <div>
              <p>250</p>
              <AppIcon type="interest" />
            </div>
          </div>
        )) //
      }
    </StyledSizeSelectArea>
  );
}

const StyledSizeSelectArea = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px 0 0 28px;
  height: 288px;

  .size-item {
    float: left;
    display: table;
    margin: 4px;
    width: 120px;
    height: 52px;

    & > div {
      display: table-cell;
      line-height: normal;
      border: 1px solid #d3d3d3;
      border-radius: 12px;
      background-color: #fff;
      color: rgba(34, 34, 34, 0.8);
      padding: 0 18px;
      height: 42px;
      font-size: 14px;
      letter-spacing: -0.14px;
      cursor: pointer;
      vertical-align: middle;
      text-align: center;
      transition: 0.15s all ease-out;
      &:hover {
        background: #f9f9f9;
      }

      p {
        font-size: 14px;
        color: #000;
      }
      svg {
        width: 16px;
        height: 16px;
        vertical-align: top;
        fill: white;

        &.on {
          fill: #222;
        }
      }
    }
  }
`;

export default SizeSelectArea;
