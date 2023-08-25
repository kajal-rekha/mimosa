import React from 'react';
import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper mt-20' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Skincare', 'Haircare', 'Makeup Artistry']}>
        <p>Tab 1 Content</p>
        <p>Tab 2 Content</p>
        <p>Tab 3 Content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
