import { data } from '@/data/products';
import { productItem } from '@/types/productItem';
import Link from 'next/link';

import SectionTitle from '../shared/SectionTitle';
import { buttonVariants } from '../ui/Button';
import ProductItem from './ProductItem';

interface ProductsProps {
  fromProductsPage?: boolean;
}
const Products: React.FC<ProductsProps> = ({ fromProductsPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subTitle='Products'
        title='Brows our beauty products'
        color='bg-blue'
      />

      {/* products */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {!fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
        {fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </div>

      {!fromProductsPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'outline' })}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
