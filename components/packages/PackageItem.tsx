
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrenct';
import { beautyPackageType } from '@/types/beautyPackage';

interface PackageItemProps {
  packageItem: beautyPackageType;
}

const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <Link
        href={`/packages/${packageItem._id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={packageItem.images[0]}
          alt={packageItem.title}
          height={640}
          width={640}
          priority
          className='brigtness-90 group-hover:brigtness-100 eq h-full w-full object-cover group-hover:scale-125'
        />
      </Link>

      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border bg-gray/25 p-5 hover:bg-gray/50'>
        <span className='text-sm font-bold uppercase tracking-[0.375em] text-green'>
          {packageItem.category}
        </span>
        <h4 className='text-2xl'>{packageItem.title}</h4>
        <p className='text-dark/75'>
          {packageItem.description.substring(0, 50)}...
        </p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-2xl'>{formatCurrency(packageItem.price)}</p>
          <Link
            href={`/packages/${packageItem._id}`}
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
