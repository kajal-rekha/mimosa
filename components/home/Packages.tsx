import { data } from '@/data/packages';
import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper mt-20' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Skincare', 'Haircare', 'Makeup Artistry']}>
        {/* SKIN CARE */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Skincare')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Haircare */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Haircare')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Makeup Artistry')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
