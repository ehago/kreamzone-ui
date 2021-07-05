import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import styled from "styled-components";
import AppIcon from '../../AppIcon';
import SlickSlider from './SlickSlider';
import { IProductDetail } from '../Product'

interface IProps {
  productDetail: IProductDetail;
};

function ProductImages({productDetail}: IProps) {
  const [slider, setSlider] = useState(0);
  const { images } = productDetail;

  const onClickSlider = useCallback((index: number) => {
    setSlider(index);
  }, []);

  return (
    <StyledProductImages background={images[slider].backgroundColor}>
      {/* <div className="spread"></div> */}
      <div className="image-wrapper">
        <div className="image-box">
          <div className="product-image-list-wrapper">
            <div className="product-image-list">
              {images.map((image, i) => (
                <img
                  key={i}
                  className={cn("product-image", {"active": i === slider})}
                  src={image.url}
                  alt="상품 이미지"
                  onClick={() => console.log(i)}
                />
              ))}
            </div>
          </div>
          {images?.length > 1 && (
            <>
              <AppIcon
                type="leftChevron"
                className="chevron left"
                onClick={() =>
                  setSlider((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1))
                }
              />
              <AppIcon
                type="rightChevron"
                className="chevron right"
                onClick={() =>
                  setSlider((prev) => (prev + 1 === images.length? 0 : prev + 1))
                }
              />
              <SlickSlider
                images={images}
                slider={slider}
                onClick={onClickSlider}
              />
            </>
          )}
        </div>
      </div>
    </StyledProductImages>
  );
}

const StyledProductImages = styled.div<{ background: string }>`
  position: relative;

  // .spread {
  //   position: static;
  //   display: block;
  //   height: 456px;
  //   background-color: rgba(0, 0, 0, 0);
  // }

  .image-wrapper {
    display: block;
    width: 100%;
    height: 100%;
  }

  .image-box {
    overflow: hidden;
    position: relative;

    .product-image-list-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: ${(p) => p.background};
      .product-image-list {
        width: 100%;
        display: inline-block;
        position: relative;
        vertical-align: top;
        overflow: hidden;
        padding-top: 100%;
        border-radius: 12px;
  
        .product-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 81.5%;
          height: auto;
          vertical-align: top;
          opacity: 0;
          transition: opacity 500ms ease 0s, visibility 500ms ease 0s;

          &.active {
            opacity: 1;
            z-index: 1;
          }
        }
      }
    }
  
    .chevron {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      fill: #d6d6d6;
      cursor: pointer;
      width: 24px;
      height: 24px;
  
      &.left {
        left: 0;
        margin-left: 10px;
      }
      &.right {
        right: 0;
        margin-right: 10px;
      }
    }
  }
`;

export default ProductImages;
