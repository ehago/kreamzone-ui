import Footer from '@components/Footer';
import GuideBanner from '@components/GuideBanner';
import Header from '@components/Header';
import LoginForm from '@components/LoginForm';
import BasicTemplate from '@templates/BasicTemplate';

interface IProps {}

function LoginPage({}: IProps) {
  return <BasicTemplate Header={<Header />} Content={<LoginForm />} GuideBanner={<GuideBanner />} Footer={<Footer />} />;
}

export default LoginPage;
