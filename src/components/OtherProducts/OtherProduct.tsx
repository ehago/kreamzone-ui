import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IProduct } from '@components/LandingProducts/__data__/products';

interface IProps {
  product: IProduct;
}

function OtherProduct({ product }: IProps) {
  return (
    <StyledOtherProduct>
      <Link to={`/product/${product.id}`}>
        <div className="product">
          <img src={product.productImage} alt={product.desc} />
        </div>
        <div className="info-box">
          <div className="brand">
            <img src={product.brandImage} alt={product.brand} />
          </div>
          <p className="name">{product.name}</p>
          <div className="price">
              <div className="amount">
                  <em>{product.price}</em>
                  <span className="won">원</span>
              </div>
              <div className="desc">
                  <p>즉시구매가</p>
              </div>
          </div>
        </div>
      </Link>
    </StyledOtherProduct>
  );
}

const StyledOtherProduct = styled.li`
  position: relative;
  float: left;
  margin: 24px 0 20px;
  padding: 0 10px;
  width: 20%;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  a {
    display: block;
    background-color: #fff;
    border-radius: 12px;

    .product {
      overflow: hidden;
      position: relative;
      padding-top: 100%;
      border-radius: 12px;
      background-color: #f4f4f4;
      
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
          border: 0;
          vertical-align: top;
        }
      }

      .name {
        padding-top: 8px;
        height: auto;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 13px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: normal;
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
            font-style: normal;
          }

          .won {
            line-height: 21px;
            font-size: 14px;
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

export default OtherProduct;
