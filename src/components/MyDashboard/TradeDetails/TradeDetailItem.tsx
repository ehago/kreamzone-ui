import styled from 'styled-components';

interface IProps {}

function TradeDetailItem({}: IProps) {
  return (
    <StyledTradeDetailItem>
      <div className="history_product">
        <div className="product_box">
          <div className="product" style={{ backgroundColor: 'rgb(246, 238, 237)' }}>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMTAyMDNfMjY2/MDAxNjEyMzE3NDQ1NTAx.Oejtk7Y6zAvCrjhtND50c7JClIDq5g75DlJ391D3Rfkg.nukMbPmTeoKRGgSvfzBM9ZoF0JaqIw6Ge5TkWfncHHUg.PNG/p_56ffd2340d6c476da2f58c151e0205c2.png?type=m"
              alt="Jordan 1 Retro High OG University Blue"
              className="product_img"
            />
          </div>
        </div>
        <div className="product_detail">
          <p className="name">Jordan 1 Retro High OG University Blue</p>
          <span className="size">265</span>
        </div>
      </div>
      <div className="history_status">
        <div className="status_box">
          <span className="status_txt">취소완료</span>
          <span className="status_detail"> 검수 불합격 </span>
        </div>
      </div>
    </StyledTradeDetailItem>
  );
}

const StyledTradeDetailItem = styled.div`
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  margin: 0;

  .history_product {
    display: flex;
    box-sizing: border-box;
    .product_box {
      -webkit-box-flex: 0;
      flex: none;
      width: 80px;
      height: 80px;
      .product {
        overflow: hidden;
        position: relative;
        padding-top: 100%;
        border-radius: 12px;

        background: rgb(246, 238, 237); //

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 81.5%;
          height: auto;
          border: 0;
          vertical-align: top;
          user-select: none;
        }
      }
    }
    .product_detail {
      -webkit-box-orient: vertical;
      margin-left: 16px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;

      .name {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .size {
        margin-top: 8px;
        display: inline-flex;
        letter-spacing: -0.21px;
        font-weight: 700;
        color: rgba(34, 34, 34, 0.5);
        font-size: 14px;
      }
    }
  }

  .history_status {
    margin-left: auto;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: right;

    .status_box {
      margin-left: 14px;
      width: 140px;
      display: block;

      .status_txt {
        margin-left: auto;
        display: block;
        font-size: 14px;
        letter-spacing: -0.21px;
      }

      .status_detail {
        margin-left: auto;
        display: inline-block;
        font-size: 12px;
        letter-spacing: -0.06px;
        line-height: 15px;
        color: rgba(34, 34, 34, 0.5);
        white-space: pre-line;
      }
    }
  }
`;

export default TradeDetailItem;
