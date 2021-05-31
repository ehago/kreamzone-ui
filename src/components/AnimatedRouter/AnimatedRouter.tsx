import { Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

type AnimationType = 'fade';

interface IProps {
  timeout: number;
  animation: AnimationType;
  children: React.ReactNode; // <Route /> 컴포넌트 리스트
}

/* 
  [라우터 전환시 애니메이션을 적용해주는 컴포넌트]
  - 이 기능만 적용하기 위해 react-transition-group 라이브러리를 사용하는게 걸리긴 하지만..
  - 이 방법이 가장 나은 것 같아 일단 사용중..
*/
function AnimatedRouter({ timeout, animation, children }: IProps) {
  const location = useLocation();

  return (
    <StyledAnimatedRouter>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={animation}
          timeout={timeout}
        >
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    </StyledAnimatedRouter>
  );
}

const StyledAnimatedRouter = styled.div`
  /* fade 애니메이션 정의 */
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  .fade-exit {
    display: none;
  }

  /* 다른 애니메이션 정의는 이곳에.. */
`;

export default AnimatedRouter;
