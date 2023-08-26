import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }
  return (
    <main className='text-8xl'>
      <PackageDetailsSection packageItem={packageItem} />
    </main>
  );
};

export default PackageDetailsPage;
