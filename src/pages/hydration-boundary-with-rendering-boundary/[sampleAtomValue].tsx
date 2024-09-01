import { HydrationBoundaryWithRenderingBoundary } from '../../components/hydration-boundary-with-rendering-boundary';

export default function Page({ sampleAtomValue}: {
  sampleAtomValue: string;
}) {
  return (
    <HydrationBoundaryWithRenderingBoundary sampleAtomValue={sampleAtomValue} />
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
