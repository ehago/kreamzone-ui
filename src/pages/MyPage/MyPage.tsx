import AnimatedRouter from '@components/AnimatedRouter';
import BuyingDetails from '@components/BuyingDetails';
import Footer from '@components/Footer';
import Header from '@components/Header';
import InterestDetails from '@components/InterestDetails';
import MyAccount from '@components/MyAccount';
import MyAddress from '@components/MyAddress';
import MyDashboard from '@components/MyDashboard';
import MyPageNavigation from '@components/MyPageNavigation';
import MyPayment from '@components/MyPayment';
import MyProfile from '@components/MyProfile';
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
        <Route path="/my" component={MyDashboard} exact />
        <Route path="/my/buying" component={BuyingDetails} exact />
        <Route path="/my/selling" component={SalesDetails} exact />
        <Route path="/my/wish" component={InterestDetails} exact />
        <Route path="/my/profile" component={MyProfile} exact />
        <Route path="/my/address" component={MyAddress} exact />
        <Route path="/my/payment" component={MyPayment} exact />
        <Route path="/my/account" component={MyAccount} exact />
      </AnimatedRouter>
    </NavigationTemplate>
  );
}

export default MyPage;
