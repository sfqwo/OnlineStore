import React from 'react';
import Link from 'next/link';
import styles from './SelectionItem.module.scss';
import { IFilm } from '@src/models/films';
import clsx from 'clsx';

interface ISelectionItem {
  film: IFilm,
  isSlider?: boolean,
  isGenre?: boolean,
}

const SelectionItem = ({ film, isSlider = false, isGenre = false }: ISelectionItem) => {
  return(
    <Link href='/' className={clsx(styles.film, isSlider && styles.slider, isGenre && styles.genre)}>
      <div className={styles.film_info}>{film.nameRu}</div>
      <div className={styles.film_info}>
        {film.year}
        <br/>
        {film.genres.map(g => g.genre + ',  ')}
        </div>
      <div style={{ backgroundImage: `url(${film.posterUrl})`}} className={styles.film_img} />
    </Link>
  )
}
export default SelectionItem;