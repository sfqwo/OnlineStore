import React from 'react';
import styles from './GenreSliderBlock.module.scss';
import LinkSvg from '@assets/icons/link.svg';
import GenreSlider from '@src/components/genreSlider/GenreSlider';
import { IFilm, IFilms } from '@src/models/films';
import Link from 'next/link';

export interface IGenreSliderBlock {
  [x: string]: IFilm[],
}

const GenreSliderBlock: React.FC<IGenreSliderBlock> = (genres) => {
  return(
    <div className={styles.block}>
        <GenreSlider {...genres} />
        <Link href='/' className={styles.block_link}>
          Еще
          <LinkSvg />
        </Link>
    </div>
  )
}
export default GenreSliderBlock;