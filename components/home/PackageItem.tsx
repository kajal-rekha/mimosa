import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrenct';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <Link
        href={`/packages/${id}`}
        className='border-gray group h-[15rem] w-full overflow-hidden rounded-xl border'
      >
        <Image
          src={image}
          alt={title}
          height={640}
          width={640}
          priority
          className='brigtness-90 group-hover:brigtness-100 eq h-full w-full object-cover group-hover:scale-125'
        />
      </Link>

      <div className='eq bg-gray/25 hover:bg-gray/50 flex w-full flex-col gap-2.5 rounded-xl border p-5'>
        <span className='text-sm font-bold uppercase tracking-[0.375em] text-green'>
          {category}
        </span>
        <h4 className='text-2xl'>{title}</h4>
        <p className='text-dark/75'>{description.substring(0, 50)}...</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-2xl'>{formatCurrency(price)}</p>
          <Link
            href={`/packages/${id}`}
            className={buttonVariants({ variant: 'violet' })}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
