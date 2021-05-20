import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmptyResult from './EmptyResult';

interface IProps {
  keyword: string;
  result: any;
}

function SearchResult({ keyword, result }: IProps) {
  return (
    <StyledSearchResult>
      {
        result ? (
          <>
            <div className="title-area">
              <p>{keyword}</p>
            </div>
            <div className="result-area"></div>
            <Link className="more-link" to="/dwd">
              &gt;
            </Link>
          </>
        ) : (
          <EmptyResult />
        ) //
      }
    </StyledSearchResult>
  );
}

const StyledSearchResult = styled.div`
  position: relative;
  width: 704px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 23px;
  margin: 0 auto;
  overflow: hidden;
  background: white;

  .title-area {
    line-height: 20px;
    font-weight: 700;
    padding-top: 9px;
    padding-right: 100px;
    padding-bottom: 13px;
    margin-right: 43px;
    border-bottom: 1px solid #ebebeb;

    p {
      font-size: 14px;
      letter-spacing: -0.21px;
      color: #000;
    }
  }

  .more-link {
    position: absolute;
    top: 5px;
    right: 49px;
    font-size: 0;
  }
`;

export default SearchResult;
