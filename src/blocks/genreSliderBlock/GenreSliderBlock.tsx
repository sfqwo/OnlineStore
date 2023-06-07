import React from 'react';
import GenreSlider from '@src/components/genreSlider/GenreSlider';
import { IFilm } from '@src/models/films';
import styles from './GenreSliderBlock.module.scss';
import { MoreButton } from '@src/components/buttons/moreButton/MoreButton';

export interface IGenreSliderBlock {
  [x: string]: IFilm[];
}

const GenreSliderBlock: React.FC<IGenreSliderBlock> = (genres) => {
  return (
    <div className={styles.block}>
      <GenreSlider {...genres} />
      <MoreButton />
    </div>
  );
};
export default GenreSliderBlock;
