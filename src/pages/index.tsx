export default async function HomePage() {

  return (
    <main>
      Navigate by above links
    </main>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
