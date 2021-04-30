import styled from 'styled-components';
import LandingProduct from './LandingProduct';
import RepresentationProduct from './RepresentationProduct';

interface IProps {
  title: string;
  subTitle: string;
  noRepresentation?: boolean;
}

function LandingProducts({
  title,
  subTitle,
  noRepresentation = false,
}: IProps) {
  return (
    <StyledLandingProducts>
      <div className="inner-wrapper">
        <p className="title">{title}</p>
        <p className="sub-title">{subTitle}</p>

        <ul className="product-list">
          {
            Array.from({ length: 4 }, (_, i) => (
              <LandingProduct key={i} />
            )) //
          }
        </ul>
        <div className="more-button-wrapper">
          <button>더보기</button>
        </div>
      </div>
      {!noRepresentation && <RepresentationProduct />}
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
    }
  }
`;

export default LandingProducts;
