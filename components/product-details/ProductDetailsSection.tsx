import { productItem } from '@/types/productItem';
import React from 'react';

interface ProductDetailsSectionProps {
  product: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section className='section-padding wrapper text-8xl'>
      ProductDetailsSection
    </section>
  );
};

export default ProductDetailsSection;
