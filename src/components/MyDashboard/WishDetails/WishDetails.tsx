import { IDropped } from '@libs/apis/landing';
import styled from 'styled-components';
import WishProduct from './WishProduct';
import Loader from './Loader';

interface IProps {
  isLoading: boolean;
  wishList: IDropped[] | undefined; // 임시
}

function WishDetails({ isLoading, wishList }: IProps) {
  return (
    <StyledWishDetails>
      <HeaderSection>
        <h3 className="title">관심 상품</h3>
      </HeaderSection>
      <ContentSection>
        <div>
          {
            isLoading ? (
              <Loader />
            ) : (
              wishList?.slice(0, 4).map((product) => (
                <WishProduct
                  key={product.item_id}
                  product={product} //
                />
              ))
            ) //
          }
        </div>
      </ContentSection>
    </StyledWishDetails>
  );
}

const StyledWishDetails = styled.div``;

const HeaderSection = styled.div`
  margin-top: 56px;
  padding-bottom: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;

  h3.title {
    font-size: 18px;
    letter-spacing: -0.27px;
  }
`;

const ContentSection = styled.div`
  margin: 0 -10px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default WishDetails;
