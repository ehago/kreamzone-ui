import Header from '@components/Header';
import Product from '@components/Product';
import PurchaseProcess from '@components/PurchaseProcess';
import OtherProducts from '@components/OtherProducts';
import GuidBanner from '@components/GuideBanner';
import Footer from '@components/Footer';
import BasicTemplate from '@templates/BasicTemplate';

interface IProps {}

function ProductPage({}: IProps) {
  return (
    <BasicTemplate
        Header={<Header/>}
        Content={
          <>
            <Product/>
            <PurchaseProcess/>
            <OtherProducts/>
          </>
        }
        GuideBanner={<GuidBanner/>}
        Footer={<Footer/>}
    />
  );
}

export default ProductPage;
