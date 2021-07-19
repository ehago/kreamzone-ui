/* eslint-disable @typescript-eslint/no-unused-vars */
import Banner from '@components/Banner';
import LandingProducts from '@components/LandingProducts';
import useLandingPageContent from './hooks/useLandingPageContent';

function LandingPageContents() {
  const { isLoaindg, droppedList, popularList, recommendedList } = useLandingPageContent();

  return (
    <>
      <Banner />
      <LandingProducts
        title="Just Dropped"
        subTitle="발매 상품"
        isLoading={isLoaindg}
        products={droppedList} //
      />
      <LandingProducts
        title="Most Popular"
        subTitle="인기 상품"
        isLoading={isLoaindg}
        products={popularList} //
      />
      <LandingProducts
        title="Washed Out Tones"
        subTitle="추천 상품"
        noRepresentation
        isLoading={isLoaindg}
        products={recommendedList} //
      />
    </>
  );
}

export default LandingPageContents;
