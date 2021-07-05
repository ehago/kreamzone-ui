import { Link } from 'react-router-dom';
import styled from "styled-components";
import AppIcon from '@components/AppIcon';
import OtherProduct from './OtherProduct';

import products from './__data__/products';

interface IProps {};

function OtherProducts({}: IProps) {
  return (
    <StyledOtherProducts>
      <h3 className="more-title">
        <span className="owner">New Balance</span>
        <span className="title-txt">의 다른 상품</span>
          <Link to={`/shop`} className="btn-more">
            <span className="btn-txt">더보기</span>
            <AppIcon className="arr-right-gray" type="grayRightChevron"/>
          </Link>
      </h3>
      <div className="product-list-wrapper">
        <ul className="product-list">
          {
            products.slice(0, 5).map(product => (
              <OtherProduct
                key={product.id}
                product={product}
              />
            ))
          }
        </ul>
      </div>
    </StyledOtherProducts>
  );
}

const StyledOtherProducts = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1280px;

  .more-title { 
    padding: 0 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 100%;
    font-size: 20px;
    letter-spacing: -.3px;

    .owner {
      flex-shrink: 0;
      font-weight: 700;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title-txt {
      margin-right: 50px;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-weight: 700;
    }

    .btn-more {
      margin-top: -2px;
      margin-left: auto;
      padding: 3px 0 3px 5px;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .btn-txt {
      line-height: 20px;
      font-size: 13px;
      letter-spacing: -.07px;
      color: rgba(34,34,34,.5);
    }

    .arr-right-gray {
      width: 20px;
      height: 20px;
    }
  }

  .product-list-wrapper {
    width: 100%;
    display: inline-block;
  }

  .product-list {
    padding: 0 30px;
  }
`;

export default OtherProducts;
