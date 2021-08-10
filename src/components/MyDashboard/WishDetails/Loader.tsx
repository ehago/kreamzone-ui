import styled from 'styled-components';

interface IProps {}

function Loader({}: IProps) {
  return (
    <>
      {
        Array.from({ length: 4 }, (_, index) => (
          <StyledLoader key={index}>
            <div className="image-wrapper"></div>
            <div className="info-box">
              <div className="brand"></div>
              <p className="name"></p>
              <div className="price">
                <div className="amount"></div>
                <div className="desc"></div>
              </div>
            </div>
          </StyledLoader>
        )) //
      }
    </>
  );
}

const StyledLoader = styled.div`
  padding: 0 10px;
  position: relative;
  float: left;
  margin: 20px 0;
  margin-top: 3px;
  width: 25%;
  transition: all 0.4s ease-in-out;

  .image-wrapper {
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    border-radius: 12px;
    background-color: #eaeaea;
  }

  .info-box {
    padding-top: 12px;
    max-width: 240px;

    .brand {
      height: 20px;
      width: 70px;
      background: #eaeaea;
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

      margin-top: 10px;
      height: 20px;
      background: #eaeaea;
    }
    .price {
      padding-top: 8px;

      .amount {
        height: 20px;
        font-weight: 700;
        color: #222;

        height: 20px;
        width: 100px;
        background: #eaeaea;

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
        width: 100px;
        background: #eaeaea;
      }
    }
  }
`;

export default Loader;
