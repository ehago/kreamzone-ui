import styled from 'styled-components';
import RepresentationProduct from './RepresentationProduct';
import representations from './__data__/representations';

interface IProps {}

function RepresentationProducts({}: IProps) {
  return (
    <StyledRepresentationProducts>
      <ul>
        {
          representations.map((product, i) => (
            <RepresentationProduct key={i} product={product} />
          )) //
        }
      </ul>
    </StyledRepresentationProducts>
  );
}

const StyledRepresentationProducts = styled.div`
  position: relative;
  padding-bottom: 42px;

  ul {
    width: 704px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export default RepresentationProducts;
