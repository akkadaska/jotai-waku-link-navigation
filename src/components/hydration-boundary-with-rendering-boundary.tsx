'use client';

import { HydrationBoundary, RenderingBoundary } from 'jotai-ssr';
import { sampleAtom } from '../atom/atom';
import { ShowAtom, ShowGlobalAtom } from './show-atom';

export const HydrationBoundaryWithRenderingBoundary = ({ sampleAtomValue }: {
    sampleAtomValue: string;
}) => {
  return (
    <RenderingBoundary performanceImpactingUseUpperStore>
      <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
        <main>
          <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue} within RenderingBoundary</h1>
          <ShowAtom expected={sampleAtomValue} />
          <ShowGlobalAtom />
        </main>
      </HydrationBoundary>
    </RenderingBoundary>
  );
}
