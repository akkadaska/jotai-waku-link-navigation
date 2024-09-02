'use client';

import { Provider } from 'jotai';
import { HydrationBoundary } from 'jotai-ssr';
import { PropsWithChildren } from 'react';
import { globalAtom } from '../atom/atom';

export const RootLayoutWrapper = ({ children, dateString }: PropsWithChildren<{ dateString: string}>) => {
  return (
    <Provider>
      <HydrationBoundary hydrateAtoms={[[globalAtom, `Hydrated in RootLayout at ${dateString}`]]}>
        {children}
      </HydrationBoundary>
    </Provider>
  )
}