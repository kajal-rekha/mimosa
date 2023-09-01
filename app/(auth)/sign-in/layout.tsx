import type { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Mimosa | Sign in',
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SignInLayout;
