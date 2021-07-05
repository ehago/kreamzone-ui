import styled from "styled-components";
import cn from 'classnames';
import { IProductImage } from "../Product";

interface IProps {
    images: IProductImage[];
    slider: number;
    onClick: (slider: number) => void;
};

function SlickSlider({ images, slider, onClick }: IProps) {
  return (
    <StyledSlickSlider>
      {
        Array.from({ length: images.length }, (_, i) => (
            <li key={i}
                className={cn({ active: i === slider})}
                onClick={() => onClick(i)}
            />
        ))
      }
    </StyledSlickSlider>
  );
}

const StyledSlickSlider = styled.ul`
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  text-align: center;
  display: block !important;

  li {
    display: inline-block;
    vertical-align: top;
    width: 32px;
    height: 12px;
    font-size: 0;
    color: rgba(0, 0, 0, 0);
    vertical-align: top;
    cursor: pointer;
    margin-left: 8px;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: rgba(34, 34, 34, 0.1);
    }
    
    &.active::before {
        background-color: #222
    }

    &:first-child {
        margin-left: 0;
    }
  }
`;

export default SlickSlider;
