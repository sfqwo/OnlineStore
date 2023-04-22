import { IGenreSliderBlock } from '@src/blocks/genreSliderBlock/GenreSliderBlock';
import { EGenres, IFilm } from '@src/models/films';
import React, { Dispatch, SetStateAction, useState } from 'react';
import SelectionItem from '../selectionItem/SelectionItem';
import styles from './GenreSlider.module.scss'
import clsx from 'clsx';

interface IGenre {
  genre: keyof typeof EGenres,
  list: IFilm[],
  isActive?: boolean,
  changeActive: () => void;
}

const Genre = ({ genre, list, isActive = false, changeActive }: IGenre) => {
  const genreList = list.slice(0, 4);
  return (
    <div className={styles.genre}>
        <button onClick={changeActive} className={clsx(styles.genre_item, !isActive && styles.genre_hidden)}>
        {isActive ? (
          <>
            <div className={styles.genre_item__title}>{EGenres[genre]}</div>
            <div className={styles.genre_item__list}>
              {genreList.map(film => <SelectionItem film={film} key={film.filmId} isGenre />)}
            </div>
          </>
        ) : (
          <span>{EGenres[genre]}</span>
        )}
        </button>
    </div>
  )
}

const GenreSlider: React.FC<IGenreSliderBlock> = (genres) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return(
    <div className={styles.wrap}>
      {Object.keys(genres).map((genre, i) => (
        <Genre
          genre={genre as keyof typeof EGenres}
          list={genres[genre]}
          isActive={activeIndex === i}
          key={genre}
          changeActive={() => setActiveIndex(i)}
        />
      ))}
    </div>
  )
}
export default GenreSlider;