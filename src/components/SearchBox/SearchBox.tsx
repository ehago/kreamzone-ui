import styled from 'styled-components';
import SearchIcon from './SearchIcon';

interface IProps {}

function SearchBox({}: IProps) {
  return (
    <StyledSearchBox>
      <SearchIcon />
      <input placeholder="브랜드명, 모델명, 모델번호 등"></input>
      <button></button>
    </StyledSearchBox>
  );
}

const StyledSearchBox = styled.div`
  position: relative;
  padding: 0 40px 0 44px;
  height: 40px;
  background-color: #f4f4f4;
  border-radius: 8px;

  .icon {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 24px;
    height: 24px;
    background: black;
  }
  input {
    width: 100%;
    height: 100%;
    transition: all 0.1s;
    font-size: 14px;
    letter-spacing: -0.21px;
    padding: 0;
    outline: 0;
    border: 0;
    resize: none;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: rgba(0, 0, 0, 0);
    &::placeholder {
      visibility: hidden;
    }
    &:focus {
      &::placeholder {
        visibility: visible;
      }
    }
  }

  button {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    display: none;
  }
`;

export default SearchBox;
