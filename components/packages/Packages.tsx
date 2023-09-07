import { data } from '@/data/packages';
import { cn } from '@/lib/utils';
import { packageItem } from '@/types/packageItem';
import SectionTitle from '../shared/SectionTitle';
import { buttonVariants } from '../ui/Button';
import HorizontalTab from '../ui/HarizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';

interface PackagesProps {
  fromPackagePage?: boolean;
}
const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  return (
    <section className='wrapper mt-64' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Skincare', 'Haircare', 'Makeup Artistry']}>
        {/* SKIN CARE */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Skincare')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Skincare')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        {/* Haircare */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Haircare')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Haircare')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter(
                (item: packageItem) => item.masterCategory === 'Makeup Artistry'
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter(
                (item: packageItem) => item.masterCategory === 'Makeup Artistry'
              )
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>

      {!fromPackagePage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
