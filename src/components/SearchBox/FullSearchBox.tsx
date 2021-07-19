import AppIcon from '@components/AppIcon';
import useOutSideClick from '@hooks/useOutSideClick';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import RepresentationProducts from './RepresentationProducts';
import SearchHistoryArea from './SearchHistoryArea';
import SearchResult from './SearchResult';

interface IProps {
  onClose: () => void;
}

function FullSearchBox({ onClose }: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [keyword, setKeyword] = useState('');

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value);
  };

  useOutSideClick(ref, onClose);

  return (
    <StyledFullSearchBox>
      <div ref={ref} className="full-search-box">
        <div className="search-area">
          <div className="search-box-wrapper">
            <div className="search-box">
              <AppIcon type="search" className="search-icon" />
              <input type="text" placeholder="브랜드명, 모델명, 모델번호 등" value={keyword} onChange={onChange} autoFocus />
              <button className="remove-keyword-button" onClick={() => setKeyword('')}>
                <AppIcon type="close" className="remove-icon" />
              </button>
            </div>
          </div>
          <button className="cancel-button" onClick={onClose}>
            취소
          </button>
        </div>
        {
          keyword.length ? (
            <SearchResult
              keyword={keyword}
              result={false} //
            />
          ) : (
            <>
              <SearchHistoryArea />
              <RepresentationProducts />
            </>
          ) //
        }
      </div>
    </StyledFullSearchBox>
  );
}

const StyledFullSearchBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
  overflow-y: auto;

  .full-search-box {
    background: white;

    .search-area {
      width: 704px;
      margin: 0 auto;
      overflow: hidden;
      display: flex;
      padding: 25px 0px 19px;

      .search-box-wrapper {
        flex: 1;
        margin-right: 20px;

        .search-box {
          position: relative;
          padding: 0 40px 0 44px;
          height: 40px;
          background-color: #f4f4f4;
          border-radius: 8px;

          .search-icon {
            position: absolute;
            top: 8px;
            left: 12px;
            width: 24px;
            height: 24px;
            fill: rgb(187, 187, 187);
          }
          .remove-keyword-button {
            position: absolute;
            top: 13px;
            right: 13px;
            width: 13px;
            height: 13px;
            border: none;
            cursor: pointer;
            .remove-icon {
              fill: rgb(34, 34, 34);
            }
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
            color: #222;
          }
        }
      }

      .cancel-button {
        padding: 0;
        border: 0;
        outline: none;
        background: none;
        background-color: rgba(0, 0, 0, 0);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;
        cursor: pointer;
        transition: 0.1s all ease-out;
        color: #222;
        &:hover {
          color: #5d5d5d;
        }
      }
    }
  }
`;

export default FullSearchBox;
