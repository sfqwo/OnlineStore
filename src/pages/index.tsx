import GenreSliderBlock from '@src/blocks/genreSliderBlock/GenreSliderBlock';
import MainBlock from '@src/blocks/mainBlock/MainBlock';
import { MetaHead } from '@src/components/metaHead/MetaHead';
import Slider from '@src/components/slider/Slider';
import { IFilm, IFilms, IFilmsTop } from '@src/models/films';

const data = {
  events: [
    {
      title: 'Что надо знать о Карле Симон',
      content: `История о том, как у семьи фермеров современные капиталисты пытаются отобрать землю,
        — всего второй фильм 36-летней Симон. Рассказываем, что надо о ней знать.`,
    },
    {
      title: 'Знакомьтесь, кинокомпания A-ONE',
      content: `Есть такая профессия - прокатчик.Команда A-One о кино, зрителях и мемахс Луи Гаррелем.`,
    },
    {
      title: 'Везде и сразу, но возможно не все',
      content: `Подводим итоги «Оскара», заканчиваем «Оскар»-issue и рассказываем, почему триумф «Все,
        везде и сразу» не то, чем кажется.`,
    },
  ],
}

export default function Home({ top, premieres, genres }: { top: IFilmsTop, premieres: IFilms, genres: {[x: string]: IFilm[]} }) {
  console.log(top, premieres, genres)
  return (
    <>
      <MetaHead title='Online Store' description="Главная" />
      <main>
        <MainBlock events={data.events} selection={top.films.slice(0, 4)} />
        <Slider title='Новинки' items={premieres.items} />
        <Slider title='Рекомендации для вас' items={top.films.slice(4, 12)} />
        <GenreSliderBlock {...genres} />
        <Slider title='Рекомендации для вас' items={top.films.slice(12, 20)} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const top: IFilmsTop = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const premieres: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=APRIL', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const triller: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const drama: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=2', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const criminal: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=3', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const melodrama: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=4', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  const kids: IFilms = await (await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=6', {
    method: 'GET',
    headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
    },
  }))?.json();

  return {
    props: {
      top,
      premieres,
      genres: {
        triller: triller.items, 
        drama: drama.items,
        criminal: criminal.items,
        melodrama: melodrama.items,
        kids: kids.items,
      }
    }
  }
}
