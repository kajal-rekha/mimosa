import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mimosa | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#32B8CB',
          colorSuccess: '#00B79F',
          colorWarning: '#FF7A42',
          colorDanger: '#C3315D',
          colorBackground: '#FFFCFA',
          colorText: '#19191B',
          colorTextSecondary: '#5a5a59',
          colorTextOnPrimaryBackground: '#ebf8fa',
        },
        layout: {
          socialButtonsPlacement: 'bottom',
        },
      }}
    >
      <html lang='en'>
        <body
          className={cn(
            baiJamjuree.className,
            'bg-light text-dark antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
