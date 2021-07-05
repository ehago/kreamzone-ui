import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppIcon from '@components/AppIcon';
import WishButton from './WishButton';
import AuctionButton from './AuctionButton';
import { IProductDetail } from '../Product'

interface IProps {
  productDetail: IProductDetail
}

function ProductInfo({ productDetail }: IProps) {
  const { name, desc, fluctuation, salePrice, purchasePrice, recentPrice, fluctuationType } = productDetail;
  return (
    <StyledProductInfo>
      <div className="detail-main-title">
        <h2>{name}</h2>
        <p>{desc}</p>
        <WishButton />
      </div>
      <div className="detail-size">
        <div className="title">
          <span>사이즈</span>
        </div>
        <div className="size">
          <Link to="#">
            <span>모든 사이즈</span>
            <AppIcon
              type="downCircle"
              className="more-size"
              onClick={() => {
                console.log('down circle');
              }}
            />
          </Link>
        </div>
      </div>
      <div className="detail-price">
        <div className="title">
          <span>최근 거래가</span>
        </div>
        <div className="price">
          <div className="amount">
            <span className="num">{recentPrice}</span>
            <span className="won">원</span>
          </div>
          <div className={`fluctuation decreas ${fluctuationType}`}>
            <p>{fluctuation}</p>
          </div>
        </div>
      </div>
      <div className="auction-btn-box">
        <AuctionButton text="구매" price={salePrice} background="#ef6253" />
        <AuctionButton text="판매" price={purchasePrice} background="#41b979" />
      </div>
    </StyledProductInfo>
  );
}

const StyledProductInfo = styled.div`
  padding-bottom: 60px;
  height: 800px;

  .detail-main-title {
    padding-right: 50px;
    position: relative;

    h2 {
      font-size: 24px;
      letter-spacing: -0.12px;
      font-weight: 700;
    }
    p {
      margin-top: 4px;
      font-size: 16px;
      letter-spacing: -0.16px;
      color: rgba(34, 34, 34, 0.5);
    }
  }

  .title {
    float: left;

    span {
      padding-top: 3px;
      display: inline-block;
      font-size: 13px;
      letter-spacing: -0.07px;
      color: rgba(34, 34, 34, 0.8);

      &:nth-child(2) {
        padding-top: 5px;
      }
    }
  }

  .detail-size {
    padding-top: 40px;
    padding-bottom: 11px;
    border-bottom: 1px solid #ebebeb;

    .size {
      float: right;
      a {
        display: block;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.21px;
        font-weight: 700;
        text-decoration: none;

        span {
          display: inline-block;
          margin: 2px 4px 0 0;
        }

        .more-size {
          width: 24px;
          height: 24px;
          vertical-align: top;
        }
      }
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .detail-price {
    margin-top: 12px;
    min-height: 44px;

    .price {
      float: right;
      text-align: right;

      .amount {
        font-weight: 700;
        font-size: 0;

        span {
          display: inline-block;
          line-height: 26px;
          vertical-align: top;
        }

        .num {
          font-size: 20px;
          letter-spacing: -0.1px;
        }

        .won {
          font-size: 18px;
          letter-spacing: -0.27px;
        }
      }

      .fluctuation {
        position: relative;
        padding-top: 1px;
        padding-left: 17px;
        font-size: 13px;

        &.increase {
          color: #f15746;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -8px;
            border: 5px solid rgba(0, 0, 0, 0);
            border-bottom-color: #f15746;
          }
        }

        &.decrease {
          color: #31b46e;

          &::before {
            content: '';
            position: absolute;
            bottom: 50%;
            left: 0;
            margin-bottom: -8px;
            border: 5px solid rgba(0, 0, 0, 0);
            border-top-color: #31b46e;
          }
        }
      }
    }
  }

  .auction-btn-box {
    margin-top: 20px;
    display: flex;
    height: 60px;
  }
`;

export default ProductInfo;
