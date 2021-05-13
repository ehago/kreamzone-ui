import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {}

function RepresentationImage({}: IProps) {
  return (
    <StyledRepresentationImage>
      <Link to="/product/150023">
        <div className="banner">
          <div className="banner-item">
            <div className="item-inner">
              <div className="item-box">
                <img
                  src="https://kream-phinf.pstatic.net/MjAyMTA1MDdfNjIg/MDAxNjIwMzUyNzg2MzAw.71QrK7itK2f4OWdKY_P7TJx8lOECPXHWT8Sh6BI9LN8g.hXH2NO1MzbZsXzNMSd_ywL5u183Oco42vefvX7_PgNMg.JPEG/p_b75456b1acea400b9c720d2539680bec.jpg?type=l"
                  alt="(W) 나이키 덩크 로우 SE 플립"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </StyledRepresentationImage>
  );
}

const StyledRepresentationImage = styled.div`
  overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  height: 480px;

  .banner {
    overflow: hidden;
    vertical-align: top;
    cursor: pointer;
    max-height: 480px;

    .banner-item {
      background: #988bc5;

      .item-inner {
        margin: 0 auto;
        width: 45vw;
        max-height: 480px;

        .item-box {
          position: relative;
          padding-top: 100%;

          img {
            position: absolute;
            top: 0;
            left: 50%;
            height: 100%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            max-height: 480px;
          }
        }
      }
    }
  }
`;

export default RepresentationImage;
