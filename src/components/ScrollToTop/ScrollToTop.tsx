import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface IProps {}

function ScrollToTop({}: IProps) {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    // history.push로 페이지 이동시 마다 스크롤을 최상단으로 ~
    if (history.action === 'PUSH') {
      (window as any).scrollTo(0, 0);
    }
  }, [pathname, history]);

  return null;
}

export default ScrollToTop;
