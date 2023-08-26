import { packageItem } from '@/types/packageItem';
import React from 'react';

interface PackageDetailsSectionProps {
  packageItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>PackageDetailsSection</section>
  );
};

export default PackageDetailsSection;
