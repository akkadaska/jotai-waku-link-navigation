'use client';

import { sampleAtom } from '../atom/atom'; 
import { useHydrateAtoms } from 'jotai/utils';
import { ShowAtom, ShowGlobalAtom } from '../components/show-atom';

export const UseHydrateAtom = ({ sampleAtomValue}: {
  sampleAtomValue: string ;
}) => {
  useHydrateAtoms([[sampleAtom, sampleAtomValue]]);
  return (
    <main>
      <h1 className='text-2xl'>Hydrate by useHydrateAtom with value of {sampleAtomValue}</h1>
      <ShowAtom expected={sampleAtomValue} />
      <ShowGlobalAtom />
    </main>
  );
}

