import { data } from '@/data/packages';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import SectionTitle from '../shared/SectionTitle';
import { buttonVariants } from '../ui/Button';
import HorizontalTab from '../ui/HarizontalTab';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper mt-60' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Skincare', 'Haircare', 'Makeup Artistry']}>
        {/* SKIN CARE */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Skincare')
            .sort((a: any, b: any) => a.price - b.price)
            .slice(0, 4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Haircare */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Haircare')
            .sort((a: any, b: any) => a.price - b.price)
            .slice(0, 4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Makeup Artistry')
            .sort((a: any, b: any) => a.price - b.price)
            .slice(0, 4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>

      <div className='mt-20 flex justify-center'>
        <Link
          href='/packages'
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          View all packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;