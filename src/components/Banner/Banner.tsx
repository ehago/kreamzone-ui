/* eslint-disable @typescript-eslint/no-unused-vars */
import AppIcon from '@components/AppIcon';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import CursorList from './CursorList';
import { useHistory } from 'react-router';

// FIXME: 엉망.. 모바일에서는 터치 드래그도 동작해야하고.. 이미지 absolute라서 부모 height가 자식 height를 안따라가고..
export interface IBanner {
  to: string;
  image: string;
  backgroundColor: string;
  chevronColor: string;
  cursorColor: string;
  activeCursorColor: string;
}
const banners: IBanner[] = [
  {
    to: '/notice/23',
    image:
      'https://kream-phinf.pstatic.net/MjAyMDExMjNfMjU0/MDAxNjA2MTAxMjMwOTg2.Lru1_LSFReeOGavo_Nv5iHAHEQDrgcRVuUDO_VwQbL0g.if4WbmNvghR7rUXR_MxttP9QrAVnboaK1IAxnaF0d6kg.JPEG/p_e1a64ddc68fe4c16b7e2390ee5daa6f4.jpg?type=l',
    backgroundColor: 'rgb(249, 249, 249)',
    chevronColor: '#bbbbbb',
    cursorColor: 'rgba(0,0,0,0.3)',
    activeCursorColor: 'black',
  },
  {
    to: '/notice/31',
    image:
      'https://kream-phinf.pstatic.net/MjAyMTAzMjlfMjIx/MDAxNjE2OTUxOTIwMTYx.k4ZkrVWpWYSBsN-j1VgtgLuGwHK8nxwJgoJcrhElp7Mg.1kpDhuH3nlfljVlQoY-jtbatWm1GHAYGU3MNMV968MYg.JPEG/d_615f49845c0341a4bcec59d2597cc412.jpg?type=l',
    backgroundColor: '#e1dacb',
    chevronColor: 'white',
    cursorColor: 'rgba(255, 255, 255, 0.3)',
    activeCursorColor: 'white',
  },
  {
    to: '/about',
    image:
      'https://kream-phinf.pstatic.net/MjAyMTA0MjlfMjI5/MDAxNjE5NjgzMTI5Mjg0.em8le2UKoWaZioVpvEKPybFGaNxsJiQTSOPKXzVuNTog.Lw-nkaqGGT-GhCJ06TuQQzFEttqqqZfgAmyi93RIZwcg.JPEG/p_bfdb65a5c8de4b65af1216dab179da9b.jpg?type=l',
    backgroundColor: '#273f2c',
    chevronColor: 'white',
    cursorColor: 'rgba(255, 255, 255, 0.3)',
    activeCursorColor: 'white',
  },
  {
    to: '/notice/84',
    image:
      'https://kream-phinf.pstatic.net/MjAyMTA1MDJfMjk2/MDAxNjE5OTY0Mjk3ODk3.EmJgUeKTUzJIH9BTWunv1_llDBxEP1ZEaxRY3bZoQagg.00fXt_Uro-UpKR65o6zU0ymZTSjL0KvKFDFBkTVfmQgg.PNG/p_85141454a52c4c3ba1e2144ceba71e34.png?type=l',
    backgroundColor: '#6e9ab9',
    chevronColor: 'white',
    cursorColor: 'rgba(255, 255, 255, 0.3)',
    activeCursorColor: 'white',
  },
];

interface IProps {}

function Banner({}: IProps) {
  const history = useHistory();
  const [cursor, setCursor] = useState(0);

  const onClickCursor = useCallback((cursor: number) => {
    setCursor(cursor);
  }, []);

  const onClickBanner = (url: string) => {
    // history.push(url);
  };

  // 5초에 한 번씩 배너이미지 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setCursor((cursor) => (cursor + 1) % banners.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [cursor]);

  return (
    <StyledBanner background={banners[cursor].backgroundColor}>
      <div className="banner-image-list-wrapper">
        <div className="banner-image-list">
          {
            banners.map((banner, i) => (
              <img key={i} className={cn('banner-image', { active: cursor === i })} src={banner.image} alt="배너 이미지" onClick={() => onClickBanner(banner.to)} />
            )) //
          }
        </div>
      </div>
      <CursorList
        banners={banners}
        cursor={cursor}
        onClick={onClickCursor} //
      />
      {/* 좌 우 버튼 */}
      <AppIcon type="leftChevron" className="chevron left" style={{ fill: banners[cursor].chevronColor }} onClick={() => setCursor((prev) => (prev - 1 < 0 ? banners.length - 1 : prev - 1))} />
      <AppIcon type="rightChevron" className="chevron right" style={{ fill: banners[cursor].chevronColor }} onClick={() => setCursor((prev) => (prev + 1 > banners.length - 1 ? 0 : prev + 1))} />
    </StyledBanner>
  );
}

const StyledBanner = styled.div<{ background: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 480px;

  .banner-image-list-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 480px;
    background: ${(props) => props.background};
    transition: 0.6s background linear;
    .banner-image-list {
      position: relative;
      height: 100%;
      max-height: 480px;
      .banner-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25vw;
        min-width: 350px;
        transition: 0.6s opacity linear;
        opacity: 0;
        cursor: pointer;
        &.active {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }

  /* 좌 우 버튼 */
  .chevron {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    fill: white;
    cursor: pointer;
    width: 24px;
    height: 24px;

    &.left {
      left: 1.5rem;
    }

    &.right {
      right: 1.5rem;
    }
  }
  /* 임시 스타일링 */

  background: #bbb;
  color: white;
  font-size: 2rem;
`;

export default React.memo(Banner);
