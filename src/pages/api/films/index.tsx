import { MetaHead } from '@src/components/metaHead/MetaHead';

interface IFilmsTop{
  films: Array<any>,
  total: number,
  totalPages: number,
}


export default function Films({ items }: { items: IFilmsTop }) {
  const { films } = items;
  return (
    <>
      <MetaHead title='Online Store' description="Главная" />
      <main>
        ГЛАВНАЯ
        {films?.map((film) => <div>{film.nameRu}</div>)}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const items: IFilmsTop = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  return {
    props: {
      items
    }
  }
}

