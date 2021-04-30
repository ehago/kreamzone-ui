import styled from 'styled-components';

interface IProps {}

function RepresentationProduct({}: IProps) {
  return (
    <StyledRepresentationProduct>
      Representation product section
    </StyledRepresentationProduct>
  );
}

const StyledRepresentationProduct = styled.div`
  overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  height: 480px;

  /* 임시 스타일링 */
  background: #719fdf;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

export default RepresentationProduct;
