import styled from 'styled-components';

interface IProps {}

function ProductInfo({}: IProps) {
  return (
    <StyledProductInfo>
      <div className="product-wrapper">
        <div className="product">
          <div className="product-image-wrapper">
            <img
              src="https://kream-phinf.pstatic.net/MjAyMTA1MTBfMjE5/MDAxNjIwNjA5MzM3NDYw.DLDMiNHLWOZapY9ZjdcLJa-5s3oAFKHX1k7E26GEyr8g.BfhOKMMEqlegm33nqMFFm7zfCKdkXkguTLm78nfmiGsg.PNG/p_b5e81a4d715e45cb867ccc7b54a17860.png"
              alt="조던 1 로우 SE 스페이드"
            />
          </div>
          <div className="product-desc">
            <div className="title">Jordan 1 Low SE Spades</div>
            <div className="sub-title">조던 1 로우 SE 스페이드</div>
          </div>
        </div>
      </div>
    </StyledProductInfo>
  );
}

const StyledProductInfo = styled.div`
  padding: 0 32px;
  max-height: 420px;
  overflow-y: auto;

  .product-wrapper {
    height: 82px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;

    .product {
      display: flex;
      align-items: center;
      height: 100%;

      .product-image-wrapper {
        overflow: hidden;
        margin-right: 7px;
        width: 70px;
        height: 70px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        border-radius: 8px;

        img {
          width: 100%;
          height: 100%;
          border: 0;
          vertical-align: top;
        }
      }

      .product-desc {
        .title {
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
          line-height: 20px;
          font-size: 15px;
          letter-spacing: -0.15px;
        }
        .sub-title {
          font-size: 11px;
          line-height: 16px;
          margin-top: 2px;
          letter-spacing: -0.06px;
          color: rgba(34, 34, 34, 0.5);
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`;

export default ProductInfo;
