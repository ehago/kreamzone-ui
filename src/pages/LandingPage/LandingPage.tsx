import Banner from '@components/Banner';
import Footer from '@components/Footer';
import GuideBanner from '@components/GuideBanner';
import Header from '@components/Header';
import LandingProducts from '@components/LandingProducts';
import BasicTemplate from '@templates/BasicTemplate';

function LandingPage() {
  return (
    <BasicTemplate
      Header={<Header />}
      Content={
        <>
          <Banner />
          <LandingProducts
            title="Just Dropped"
            subTitle="발매 상품" //
          />
          <LandingProducts
            title="Most Popular"
            subTitle="인기 상품" //
          />
          <LandingProducts
            title="Washed Out Tones"
            subTitle="추천 상품"
            noRepresentation
          />
        </>
      }
      GuideBanner={<GuideBanner />}
      Footer={<Footer />}
    />
  );
}

export default LandingPage;
