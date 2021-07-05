import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductImages from './ProductImages/ProductImages';
import ProductInfo from './ProductInfo';

export interface IProductDetail {
  id: number;
  name: string;
  desc: string;
  recentPrice: number;
  fluctuation: string;
  fluctuationType: string;
  salePrice: number;
  purchasePrice: number;
  images: IProductImage[];
}

export interface IProductImage {
  url: string;
  backgroundColor: string;
}

const productDetail: IProductDetail = {
  id: 12345,
  name: 'Adidas Yeezy Boost 700 Enflame Amber',
  desc: '아디다스 이지 부스트 700 인플레임 앰버',
  recentPrice: 240000,
  fluctuation: '2,000원 (-0.9%)',
  salePrice: 211000,
  purchasePrice: 169000,
  fluctuationType: 'decrease',
  images: [
    {
      url: 'https://kream-phinf.pstatic.net/MjAyMTA2MDlfMTYw/MDAxNjIzMjAzMjA1NTA4.9xGe9NNYN88QXm4KCh-oubEMqnUNuCwUOQLrMX_I_9Qg.3j5GepLoaEa__mjP2J48i8lRfdjjaQ6BsqOZk42v_x8g.PNG/p_feac8bdb9cdd4f9f91ade9a5ee2f1ad4.png?type=l',
      backgroundColor: '#f1f1ea',
    },
    {
      url: 'https://kream-phinf.pstatic.net/MjAyMTA2MTRfODcg/MDAxNjIzNjYzMzE5NDYw._lJS5v70bBuQ7OV933kRI9vUgdS_cXqAhiEUds6Zk-Eg.T4gnoOnLCoi3g4-MhZSBfS_fqtADF6Av5g32x1Mfg24g.PNG/p_f67ac1b3b93a460a99b627236a628633.png?type=l',
      backgroundColor: '#f1f1ea',
    }
  ]
}

interface IProps {}

function Product({}: IProps) {
  return (
    <StyledProduct>
      <div className="column-bind">
        <div className="column">
          <ProductImages productDetail={productDetail}/>
          <div className="banner-method">
            <Link to="">
              <p className="method-title">KREAM 구매 방법</p>
              <p className="method-text">구매 프로세스를 확인 후 구매해주세요.</p>
            </Link>
          </div>
        </div>
        <div className="column">
          <ProductInfo productDetail={productDetail}/>
        </div>
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  margin: 0 auto;
  padding: 40px 40px 100px;
  max-width: 1280px;

  .column-bind {
    position: relative;
    &:after {
      content: '';
      display: block;
      clear: both;
    }

    .column:first-child {
      float: left;
      width: 47.5%;
      position: sticky;
      top: 130px;
    }

    .column:nth-child(2) {
      float: right;
      width: 47.5%;
      margin-left: 5%;
    }

    .banner-method {
      padding-top: 24px;

      a {
        display: block;
        padding: 18px 18px 19px;
        border: 2px solid #222;
        background-color: #fff;

        &::before {
          content: "";
          margin-right: 12px;
          float: left;
          width: 46px;
          height: 43px;
          background: url(https://kream.co.kr/_nuxt/img/detail_banner_method.af8accb.png) no-repeat;
          background-size: 46px 43px;
        }

        .method-title {
          padding-top: 3px;
          font-size: 16px;
          letter-spacing: -0.16px;
        }
        .method-text {
          font-size: 13px;
          letter-spacing: -0.07px;
          color: rgba(34, 34, 34, 0.5);
        }
      }
    }
  }
`;

export default Product;
