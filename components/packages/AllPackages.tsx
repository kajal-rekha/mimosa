import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';
import PackageItem from '../home/PackageItem';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HarizontalTab';

const AllPackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Skincare', 'Haircare', 'Makeup Artistry']}>
        {/* SKIN CARE */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Skincare')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Haircare */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Haircare')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === 'Makeup Artistry'
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default AllPackages;
