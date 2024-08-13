import SectionContainer from './SectionContainer';
import Footer from './Footer';
import { ReactNode } from 'react';
import Header from './Header';
import localFont from '@next/font/local';

interface Props {
  children: ReactNode;
}

const wotfard = localFont({
  src: [
    {
      path: './fonts/wotfard/wotfard-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/wotfard/wotfard-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/wotfard/wotfard-semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${wotfard.className} relative flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto mt-20">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
