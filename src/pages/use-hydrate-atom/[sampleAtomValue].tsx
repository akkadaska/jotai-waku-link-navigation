import { UseHydrateAtom } from '../../components/use-hydrate-atom';

export default function Page({ sampleAtomValue}: {
  sampleAtomValue: string;
}) {
  return (
    <UseHydrateAtom sampleAtomValue={sampleAtomValue} key={sampleAtomValue} />
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
