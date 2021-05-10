import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteButton from './FavoriteButton';

interface IProps {}

function LandingProduct({}: IProps) {
  return (
    <StyledLandingProduct>
      <Link to="/product/3241">
        <div className="inside">
          <img
            src="https://kream-phinf.pstatic.net/MjAyMTA1MDNfMTg0/MDAxNjIwMDA1NDcxODI5.mFZLfuGohoVd0MWtKua63fwVT0fnZi7J9Rt39nrPU_0g.v0qSfdBrfvbbwuX7_jrOh3bWXCQZwkwFuAQ8Wi1gST0g.PNG/p_1c33a686add345a589f7b089e1fcac23.png?type=m"
            alt="아디다스 이지 500 인플레임"
            className="product_img"
          />
        </div>
        <div className="info-box">
          <div className="brand">
            <img
              src="https://kream-phinf.pstatic.net/MjAyMTAzMTJfMTM5/MDAxNjE1NTE4MjM2NzA5.zSACpHizj3F43ShNk2jRb5T-heUgCIE-jRlqa2vIf7gg.NW_igMJbRCQK0-FSC20_98iw6o8-g0myWOT57hHm-Hgg.PNG/p_daf0e110ace349afb7b14b48faef2c9f.png"
              alt="Nike"
              className="brand-nike"
            />
          </div>
          <div className="name">Adidas Yeezy 500 Enflame</div>
          <div className="price">
            <div className="amount">
              <em>250,000</em>
              <div className="won">원</div>
            </div>
            <div className="desc">
              <p>즉시 구매가</p>
            </div>
          </div>
        </div>
      </Link>
      <FavoriteButton on={false} />
    </StyledLandingProduct>
  );
}

const StyledLandingProduct = styled.li`
  position: relative;
  float: left;
  margin: 20px 0;
  padding: 0 12px;
  width: 25%;
  transition: all 0.4s ease-in-out;
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
