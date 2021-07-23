import styled from 'styled-components';

interface IProps {}

function Loader({}: IProps) {
  return (
    <>
      {
        Array.from({ length: 4 }, (_, index) => (
          <Skeleton key={index}>
            <div className="inside"></div>
            <div className="info-box">
              <div className="brand"></div>
              <div className="name"></div>
              <div className="price">
                <div className="amount"></div>
                <div className="desc"></div>
              </div>
            </div>
          </Skeleton>
        )) //
      }
    </>
  );
}

const Skeleton = styled.li`
  position: relative;
  float: left;
  margin: 20px 0;
  padding: 0 12px;
  width: 25%;
  .inside {
    padding-top: 100%;
    border-radius: 12px;
    background: #eaeaea;
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
      margin-top: 10px;
      height: 20px;
      background: #eaeaea;
    }
    .price {
      margin-top: 8px;
      .amount {
        height: 20px;
        width: 100px;
        background: #eaeaea;
      }
    }
    .desc {
      padding-top: 1px;
      width: 100px;
      background: #eaeaea;
    }
  }
`;

export default Loader;
