import Footer from '@components/Footer';
import GuideBanner from '@components/GuideBanner';
import Header from '@components/Header';
import LandingPageContents from '@components/LandingPageContents';
import NoticeBar from '@components/NoticeBar';
import BasicTemplate from '@templates/BasicTemplate';

function LandingPage() {
  return (
    <BasicTemplate
      Header={<Header />}
      NoticeBar={<NoticeBar />}
      Content={<LandingPageContents />}
      GuideBanner={<GuideBanner />}
      Footer={<Footer />} //
    />
  );
}

export default LandingPage;
