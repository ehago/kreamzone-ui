/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDropped } from '@libs/apis/landing';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import LandingProduct from './LandingProduct';
import Loader from './Loader';
import RepresentationImage from './RepresentationImage';

interface IProps {
  title: string;
  subTitle: string;
  isLoading: boolean;
  noRepresentation?: boolean;
  products: IDropped[];
}

function LandingProducts({ title, subTitle, isLoading, noRepresentation = false, products }: IProps) {
  const [viewLimit, setViewLimit] = useState(4); // 최초에는 최대 4개의 제품만 보여줌

  const onShowMore = () => {
    setViewLimit((viewLimit) => viewLimit + 4);
  };

  const visibleProducts = useMemo(() => products.slice(0, viewLimit), [viewLimit, products]);
  const isMore = visibleProducts.length < products.length;

  return (
    <StyledLandingProducts>
      <div className="inner-wrapper">
        <p className="title">{title}</p>
        <p className="sub-title">{subTitle}</p>
      </div>
      <div className="product-list-wrapper">
        <ul className="product-list">
          {
            isLoading ? <Loader /> : visibleProducts.map((product) => <LandingProduct key={product.item_id} product={product} />) //
          }
        </ul>
        {
          isMore && (
            <div className="more-button-wrapper">
              <button onClick={onShowMore}>더보기</button>
            </div>
          ) //
        }
      </div>
      {!noRepresentation && <RepresentationImage />}
    </StyledLandingProducts>
  );
}

const StyledLandingProducts = styled.div`
  .inner-wrapper {
    margin: 40px auto 0;
    overflow-anchor: none;
    max-width: 1280px;
    padding: 0 40px;
  }
  .title {
    font-size: 20px;
    letter-spacing: -0.1px;
    font-weight: 700;
    color: #000;
  }
  .sub-title {
    font-size: 14px;
    letter-spacing: -0.21px;
    color: rgba(34, 34, 34, 0.5);
  }

  .product-list-wrapper {
    max-width: 1280px;
    margin: 0 auto 60px;
    overflow-anchor: none;
  }
  .product-list {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding: 0 28px;
    width: 100%;
  }

  .more-button-wrapper {
    padding: 0 32px;
    text-align: center;
    margin-bottom: 60px;

    button {
      padding: 0 30px;
      margin-top: 20px;
      border: 1px solid #d3d3d3;
      color: rgba(34, 34, 34, 0.8);
      height: 42px;
      line-height: 40px;
      border-radius: 12px;
      font-size: 14px;
      letter-spacing: -0.14px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      text-align: center;
      background-color: #fff;
      transition: 0.2s all ease-out;

      &:hover {
        background: #f9f9f9;
      }
    }
  }
`;

export default LandingProducts;
