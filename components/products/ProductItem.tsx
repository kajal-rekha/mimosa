import { productItem } from '@/types/productItem';
import { formatCurrency } from '@/utils/formatCurrenct';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

interface ProductItemProps {
  item: productItem;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className='flex h-full w-full flex-col gap-5 overflow-hidden rounded-xl border border-gray p-5'>
      <Link
        href={`/products/${item.id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-lg'
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          width={640}
          height={360}
          priority
          className='eq h-full w-full object-cover group-hover:scale-125'
        />
      </Link>
      <div className=' mt-5 flex flex-col gap-2.5'>
        <span className='text-xs font-bold uppercase tracking-widest text-orange'>
          {item.category}
        </span>
        <h3 className='truncate text-2xl'>{item.title}</h3>
        <hr className='opacity-25' />

        <p className='opacity-60'>{item.description.substring(0, 150)}...</p>
        <div className='flex items-center justify-between gap-5'>
          <p className='text-2xl'>{formatCurrency(item.price)}</p>
          <Link
            href={`/products/${item.id}`}
            className={buttonVariants({ variant: 'ocean' })}
          >
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
