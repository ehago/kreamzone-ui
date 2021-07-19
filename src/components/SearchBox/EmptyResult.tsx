import styled from 'styled-components';

interface IProps {}

function EmptyResult({}: IProps) {
  return (
    <StyledEmptyResult>
      <p className="main">검색하신 결과가 없습니다.</p>
      <p className="sub">
        상품 등록 요청은 앱 <span className="emphasis">1:1 문의하기</span> 로 요청해주세요.
      </p>
    </StyledEmptyResult>
  );
}

const StyledEmptyResult = styled.div`
  margin: 0;
  position: relative;
  padding: 120px 0 100px;
  background-color: #fff;
  text-align: center;

  .main {
    font-size: 16px;
    letter-spacing: -0.16px;
    color: rgba(34, 34, 34, 0.8);
  }
  .sub {
    padding-top: 6px;
    font-size: 13px;
    letter-spacing: -0.07px;
    color: rgba(34, 34, 34, 0.5);

    .emphasis {
      font-weight: 600;
    }
  }
`;

export default EmptyResult;
