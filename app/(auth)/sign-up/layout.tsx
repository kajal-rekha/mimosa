import type { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Mimosa | Sign up',
};

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SignUpLayout;
