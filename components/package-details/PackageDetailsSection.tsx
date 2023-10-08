import { beautyPackageType } from '@/types/beautyPackage';
import React from 'react';

interface PackageDetailsSectionProps {
  packageItem: beautyPackageType;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>
      <p>{packageItem.title}</p>
      <p>{packageItem.description}</p>
    </section>
  );
};

export default PackageDetailsSection;
