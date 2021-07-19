import { IDropped } from '@libs/apis/landing';
import { enterWithOpacity } from '@libs/styles/animation';
import { toPriceFormat } from '@libs/utils/format';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WishButton from './WishButton';

interface IProps {
  product: IDropped;
}

function LandingProduct({ product }: IProps) {
  return (
    <StyledLandingProduct>
      <Link to="/product/3241">
        <div className="inside" style={{ background: product.brand.background }}>
          <img src={product.image} alt={'상품 이미지'} />
        </div>
        <div className="info-box">
          <div className="brand">
            <img src={product.brand.image} alt="브랜드 로고" />
          </div>
          <div className="name">{product.eng_name}</div>
          <div className="price">
            <div className="amount">
              <em>{toPriceFormat(product.immediately_purchase_price)}</em>
              <div className="won">원</div>
            </div>
            <div className="desc">
              <p>즉시 구매가</p>
            </div>
          </div>
        </div>
      </Link>
      <WishButton on={false} />
    </StyledLandingProduct>
  );
}

const StyledLandingProduct = styled.li`
  position: relative;
  float: left;
  margin: 20px 0;
  padding: 0 12px;
  width: 25%;
  animation: ${enterWithOpacity} 0.4s ease-in-out;
  a {
    display: block;
    background-color: #fff;
    border-radius: 12px;

    .inside {
      background: #f1f1ea;
      // #ebf0f5, #f4f4f4, #f6eeed (파 회 빨 )

      overflow: hidden;
      position: relative;
      padding-top: 100%;
      border-radius: 12px;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 81.5%;
        height: auto;
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
        }
      }
      .name {
        padding-top: 10px;
        height: 46px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        font-size: 14px;
        color: #222;
      }
      .price {
        padding-top: 8px;
        .amount {
          height: 20px;
          font-weight: 700;
          color: #222;
          em {
            display: inline-block;
            vertical-align: top;
            line-height: 20px;
            font-size: 15px;
            letter-spacing: -0.04px;
          }
          .won {
            line-height: 21px;
            font-size: 14px;
            display: inline-block;
            vertical-align: top;
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

export default LandingProduct;
