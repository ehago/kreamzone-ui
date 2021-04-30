import styled from 'styled-components';

interface IProps {}

function LandingProduct({}: IProps) {
  return (
    <StyledLandingProduct>
      <div className="inside"></div>
    </StyledLandingProduct>
  );
}

const StyledLandingProduct = styled.div`
  position: relative;
  float: left;
  margin: 20px 0;
  padding: 0 12px;
  width: 25%;
  transition: all 0.4s ease-in-out;

  .inside {
    /* 임시 스타일링 */
    height: 360px;
    background: #ddd;
  }
`;

export default LandingProduct;
