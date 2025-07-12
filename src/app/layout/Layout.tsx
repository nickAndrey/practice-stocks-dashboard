import type { ReactNode } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

const name = 'Matt';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[315px_1fr] grid-rows-[auto_1fr] max-w-[1440px] m-auto rounded-[12px] min-h-screen">
      <Header name={name} />
      <Navigation />
      <main className="px-8 bg-grey">{children}</main>
    </div>
  );
}

export default Layout;
