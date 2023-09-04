import { data } from '@/data/products';
import { productItem } from '@/types/productItem';

import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';

const Products = () => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subTitle='Products'
        title='Brows our beauty products'
        color='bg-blue'
      />

      {/* products */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {data.map((item: productItem) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
