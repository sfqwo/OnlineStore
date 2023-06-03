import { MetaHead } from '@src/components/metaHead/MetaHead';
import { IFilmsTop } from '@src/models/films';

export default function Films({ items }: { items: IFilmsTop }) {
  const { films } = items;
  return (
    <>
      <MetaHead title="Online Store" description="Главная" />
      <main>ГЛАВНАЯ</main>
    </>
  );
}

export async function getStaticProps() {
  const items: IFilmsTop = await (
    await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  return {
    props: {
      items,
    },
  };
}
