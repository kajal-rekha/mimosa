import FooterMini from '@/components/shared/footer/FooterMini';
import NavbarMini from '@/components/shared/navbar/NavbarMini';

import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarMini />
      <div className='flex min-h-screen items-center justify-center'>
        {children}
      </div>
      <FooterMini />
    </>
  );
};

export default AuthLayout;
