import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {}

function ScrollToTop({}: IProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // history.push로 페이지 이동시 마다 스크롤을 최상단으로 ~
    (window as any).scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
