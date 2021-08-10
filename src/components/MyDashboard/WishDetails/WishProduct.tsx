import { IDropped } from '@libs/apis/landing';
import { toPriceFormat } from '@libs/utils/format';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WishButton from './WishButton';

interface IProps {
  product: IDropped;
}

function WishProduct({ product }: IProps) {
  return (
    <StyledWishProduct>
      <Link to="qwd" className="wish-product-inner">
        <div className="image-wrapper">
          <img
            src={product.image}
            alt={'상품 이미지'} //
          />
        </div>
        <div className="info-box">
          <div className="brand">
            <img
              src={product.brand.image}
              alt={'브랜드 이미지'} //
            />
          </div>
          <p className="name">{product.eng_name}</p>
          <div className="price">
            <div className="amount">
              <em className="num">{toPriceFormat(product.immediately_purchase_price)}</em>
              <span className="won lg">원</span>
            </div>
            <div className="desc">
              <p>즉시 구매가</p>
            </div>
          </div>
        </div>
      </Link>
      <WishButton />
    </StyledWishProduct>
  );
}

const StyledWishProduct = styled.div`
  padding: 0 10px;
  position: relative;
  float: left;
  margin: 20px 0;
  margin-top: 3px;
  width: 25%;
  transition: all 0.4s ease-in-out;

  .wish-product-inner {
    display: block;
    background-color: #fff;
    border-radius: 12px;

    .image-wrapper {
      overflow: hidden;
      position: relative;
      padding-top: 100%;
      border-radius: 12px;
      background-color: rgb(241, 241, 234);

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0);
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 81.5%;
        height: auto;
        border: 0;
        vertical-align: top;
      }
    }

    .info-box {
      padding-top: 12px;
      max-width: 240px;

      .brand {
        height: 20px;
        img {
          width: auto;
          height: 20px;
          border: 0;
          vertical-align: top;
        }
      }
      .name {
        height: 43px;
        font-size: 13px;
        padding-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        color: #222;
      }
      .price {
        padding-top: 8px;

        .amount {
          height: 20px;
          font-weight: 700;
          color: #222;

          .num {
            display: inline-block;
            vertical-align: top;
            line-height: 20px;
            font-size: 13px;
            letter-spacing: -0.04px;
          }
          .won {
            display: inline-block;
            vertical-align: top;
            line-height: 21px;
            font-size: 12px;
            letter-spacing: -0.04px;
          }
        }

        .desc {
          padding-top: 1px;
          font-size: 11px;
          color: rgba(34, 34, 34, 0.5);
        }
      }
    }
  }
`;

export default WishProduct;
