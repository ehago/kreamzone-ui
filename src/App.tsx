import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import ErrorPage from '@pages/ErrorPage';
import GlobalStyle from '@libs/styles/global';
import ScrollToTop from '@components/ScrollToTop';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle /> {/* 글로벌 스타일링 */}
      <BrowserRouter>
        <ScrollToTop /> {/* 페이지 이동할 때 마다 스크롤을 올려주는 컴포넌트 */}
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route component={ErrorPage} exact />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
