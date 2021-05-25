import AnimatedRouter from '@components/AnimatedRouter';
import BuyingDetails from '@components/BuyingDetails';
import Footer from '@components/Footer';
import Header from '@components/Header';
import MyPageNavigation from '@components/MyPageNavigation';
import SalesDetails from '@components/SalesDetails';
import NavigationTemplate from '@templates/NavigationTemplate';
import { Route } from 'react-router-dom';

interface IProps {}

function MyPage({}: IProps) {
  return (
    <NavigationTemplate
      Header={<Header />}
      Footer={<Footer />}
      Navigation={<MyPageNavigation />}
    >
      <AnimatedRouter animation="fade" timeout={400}>
        <Route path="/my" component={BuyingDetails} exact />
        <Route path="/my/buying" component={BuyingDetails} exact />
        <Route path="/my/selling" component={SalesDetails} exact />
      </AnimatedRouter>
    </NavigationTemplate>
  );
}

export default MyPage;
