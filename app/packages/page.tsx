import Packages from '@/components/home/Packages';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Packages fromPackagePage />
      </main>
      <FooterMini />
    </>
  );
};

export default PackagesPage;
