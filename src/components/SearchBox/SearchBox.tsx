import { useState } from 'react';
import styled from 'styled-components';
import FullSearchBox from './FullSearchBox';
import SearchIcon from './SearchIcon';

interface IProps {}

function SearchBox({}: IProps) {
  const [fullMode, setFullMode] = useState(false);

  return (
    <>
      <StyledSearchBox>
        <SearchIcon />
        <input type="text" readOnly onClick={() => setFullMode(true)}></input>
      </StyledSearchBox>
      {fullMode && <FullSearchBox onClose={() => setFullMode(false)} />}
    </>
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
  }
`;

export default SearchBox;
