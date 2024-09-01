import { HydrationBoundaryComponent } from '../../components/hydration-boundary';

export default function Page({ sampleAtomValue}: {
  sampleAtomValue: string;
}) {
  return (
    <HydrationBoundaryComponent sampleAtomValue={sampleAtomValue} />
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
