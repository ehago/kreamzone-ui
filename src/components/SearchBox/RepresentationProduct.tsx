import { brandToColor } from '@libs/styles/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface IRepresentationProduct {
  imageUrl: string;
  modelType: string;
  modelName: string;
}
interface IProps {
  product: IRepresentationProduct;
}

function RepresentationProduct({ product }: IProps) {
  const color = brandToColor(product.modelType);

  // 상품 클릭시 해당 상품 검색페이지로 이동
  const onMove = (keyword: string) => {
    // 1. 해당 상품 검색페이지로 이동하기전 검색 히스토리 저장
    let _searchHistory = localStorage.getItem('search_history');
    if (_searchHistory) {
      localStorage.setItem('search_history', JSON.stringify(JSON.parse(_searchHistory).concat(keyword)));
    } else {
      localStorage.setItem('search_history', JSON.stringify([keyword]));
    }
  };

  return (
    <StyledRepresentationProduct color={color}>
      <Link to={`/search?keyword=${product.modelType}`} onClick={() => onMove(product.modelType)}>
        <img src={product.imageUrl} alt={product.modelType} />
        <p>{product.modelType}</p>
      </Link>
    </StyledRepresentationProduct>
  );
}

const StyledRepresentationProduct = styled.li<{ color: string }>`
  display: inline-block;
  vertical-align: top;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }

  &:hover {
    font-weight: 700;
  }

  a {
    display: block;
    width: 100px;
    height: 100px;
    text-align: center;
    cursor: pointer;
    img {
      width: 80px;
      height: 80px;
      border: 0;
      vertical-align: top;
    }
    p {
      max-width: 80px;
      margin: -8px auto 0;
      font-size: 12px;
    }
  }
`;

export default RepresentationProduct;
