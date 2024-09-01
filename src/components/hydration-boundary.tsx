'use client';

import { HydrationBoundary } from 'jotai-ssr';
import { sampleAtom } from '../atom/atom';
import { ShowAtom, ShowGlobalAtom } from './show-atom';

export const HydrationBoundaryComponent = ({ sampleAtomValue}: {
  sampleAtomValue: string;
}) => {
  return (
    <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
      <main>
        <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue}</h1>
        <ShowAtom expected={sampleAtomValue} />
        <ShowGlobalAtom />
      </main>
    </HydrationBoundary>
  );
}