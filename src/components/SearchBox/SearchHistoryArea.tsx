import AppIcon from '@components/AppIcon';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {}

function SearchHistoryArea({}: IProps) {
  const [searchHistory, setSearchHistory] = useState([]);

  const onRemoveAll = () => {
    // 1. 로컬 스토리지내 최근검색정보 삭제
    localStorage.removeItem('search_history');
    // 2. 상태 초기화
    setSearchHistory([]);
  };

  useEffect(() => {
    const _searchHistory = localStorage.getItem('search_history');
    setSearchHistory(_searchHistory ? JSON.parse(_searchHistory) : []);
  }, []);

  if (searchHistory.length === 0) return null;

  return (
    <StyledSearchHistoryArea>
      <strong>최근 검색어</strong>
      <button onClick={onRemoveAll}>
        <AppIcon type="close" />
      </button>
      <ul>
        {
          searchHistory.map((keyword, i) => (
            <li key={i}>
              <Link to={`/search?keyword=${keyword}`}>{keyword}</Link>
            </li>
          )) //
        }
      </ul>
    </StyledSearchHistoryArea>
  );
}

const StyledSearchHistoryArea = styled.div`
  width: 704px;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  overflow: hidden;

  strong {
    display: inline-block;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    vertical-align: middle;
  }
  button {
    display: inline-block;
    vertical-align: middle;
    padding: 0;
    margin-left: 10px;
    border: 0;
    outline: none;
    background: none;
    background-color: rgba(0, 0, 0, 0);
    appearance: none;
    border-radius: 0;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      margin-top: -1px;
    }
  }
  ul {
    margin-top: 4px;
    li {
      a {
        display: block;
        max-width: 650px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        letter-spacing: -0.21px;
        line-height: 32px;
        color: rgba(34, 34, 34, 0.8);

        &:hover {
          font-weight: 700;
          color: #222;
        }
      }
    }
  }
`;

export default SearchHistoryArea;
