import Products from '@/components/products/products';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products fromProductsPage />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductsPage;
