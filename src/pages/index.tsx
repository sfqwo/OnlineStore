import MainBlock from '@src/blocks/mainBlock/MainBlock';
import { MetaHead } from '@src/components/metaHead/MetaHead';
import Slider from '@src/components/slider/Slider';
import { IFilmsTop } from '@src/models/films';

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
  slider1: {
    title: 'Новинки',
  },

  slider2: {
    title: 'Рекомеедации для вас',
  }
}

export default function Home({ items }: { items: IFilmsTop }) {
  console.log(items)
  return (
    <>
      <MetaHead title='Online Store' description="Главная" />
      <main>
        <MainBlock events={data.events} selection={items.films.slice(0, 4)} />
        <Slider title={data.slider1.title} items={items.films.slice(4, 12)} />
        <Slider title={data.slider2.title} items={items.films.slice(12, 20)} />
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
