import { IBoxOffice, IFilm, IFilmAward, IFilmImage, IFilmsTop } from '@src/models/films';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import FavoriteSvg from '@assets/icons/favorite.svg';
import EyeSvg from '@assets/icons/eye.svg';
import styles from './film.module.scss';
import Button from '@src/components/buttons/button/Button';
import { MoreButton } from '@src/components/buttons/moreButton/MoreButton';
import moneyTransformer from '@src/utils/moneyTransformer';
import Slider from '@src/components/slider/Slider';
import { List } from '@src/components/list/List';
import { useMemo } from 'react';

interface IFilmPage {
  film: IFilm;
  images: IFilmImage[];
  boxOffice: IBoxOffice[];
  similars: IFilm[];
}

const FilmPage: NextPage<IFilmPage> = ({ film, images, boxOffice, similars }) => {
  const { posterUrl, nameRu, nameOriginal, description, year, countries, genres, slogan } = film;
  const frames = images.slice(0, 4);
  const budget = boxOffice.find((el) => el.type === 'BUDGET');
  const usa = boxOffice.find((el) => el.type === 'USA');
  const world = boxOffice.find((el) => el.type === 'WORLD');

  const country = useMemo(
    () => ({
      title: `стран${countries.length > 1 ? 'ы' : 'а'}`,
      value: countries.map((country) => country.country).join(', '),
    }),
    countries,
  );

  const genre = useMemo(
    () => ({
      title: `жанр${genres.length > 1 ? 'ы' : ''}`,
      value: genres.map((genre) => genre.genre).join(', '),
    }),
    genres,
  );

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_img}>
          <Image src={posterUrl} alt={posterUrl} fill />
        </div>
        <div className={styles.main_info}>
          <div className={styles.main_info__header}>
            <div className={styles.main_info__header_name}>{nameRu}</div>
            {nameOriginal && (
              <div className={styles.main_info__header_subname}>
                {nameOriginal}
                &nbsp; 16+
              </div>
            )}
            <FavoriteSvg />
            <EyeSvg />
            <Button title="Смотреть" />
          </div>
          <div className={styles.main_info__desc}>{description}</div>
          <div className={styles.main_info__frames}>
            <div className={styles.main_info__frames_title}>Кадры из фильма</div>
            <div className={styles.main_info__frames_items}>
              {frames.map((frame) => (
                <Image src={frame.imageUrl} width={150} height={150} alt={frame.imageUrl} />
              ))}
            </div>
            <MoreButton withoutBorder />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_col}>
          <List title="год производства" value={year} />
          <List {...country} />
          <List {...genre} />
          <List title="слоган" value={slogan} />
          {budget && (
            <List title="бюджет" value={`${moneyTransformer(budget.amount)} ${budget.symbol}`} />
          )}
          {usa && (
            <List title="сборы в США" value={`${moneyTransformer(usa.amount)} ${usa.symbol}`} />
          )}
          {world && (
            <List
              title="сборы в мире"
              value={`${moneyTransformer(world.amount)} ${world.symbol}`}
            />
          )}
        </div>
      </div>
      <Slider title="Похожие фильмы" items={similars} />
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const films = (await (
    await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json()) as IFilmsTop;

  const paths = films.films.map((film: IFilm) => ({
    params: {
      id: film.filmId.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  const film = await (
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params?.id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  const images = await (
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params?.id}/images`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  const awards = await (
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params?.id}/awards`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  const boxOffice = await (
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params?.id}/box_office`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  const similars = await (
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params?.id}/similars`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '64273f98-5720-489f-8cf8-fe9e2f83bd18',
        'Content-Type': 'application/json',
      },
    })
  )?.json();

  return {
    props: {
      film,
      images: images.items,
      awards: awards.items,
      boxOffice: boxOffice.items,
      similars: similars.items,
    },
    revalidate: 60,
  };
};

export default FilmPage;
