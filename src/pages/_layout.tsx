import type { PropsWithChildren } from 'react';
import { globalAtom } from '../atom/atom';
import { Link } from 'waku';
import { RootLayoutWrapper } from '../components/RootLayoutWrapper';

export default async function RootLayout({ children }: PropsWithChildren) {

  return (
    <RootLayoutWrapper>
      <html lang="en">
        <body>
        <Link to="/use-hydrate-atom/a"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/use-hydrate-atom/a</span></Link>
        <Link to="/use-hydrate-atom/b"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/use-hydrate-atom/b</span></Link>
        <Link to="/hydration-boundary/m"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary/m</span></Link>
        <Link to="/hydration-boundary/n"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary/n</span></Link>
        <Link to="/hydration-boundary-with-rendering-boundary/x"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary-with-rendering-boundary/x</span></Link>
        <Link to="/hydration-boundary-with-rendering-boundary/y"><span className='text-blue-500 underline hover:text-blue-700 mx-2'>/hydration-boundary-with-rendering-boundary/y</span></Link>
        {children}</body>
      </html>
    </RootLayoutWrapper>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
