import React, { Fragment } from 'react';
import Link from 'next/link';

import LinkSvg from '@assets/icons/link.svg';
import SelectionItem from '@src/components/selectionItem/SelectionItem';
import { IFilm } from '@src/models/films';
import styles from './MainBlock.module.scss';

type TEvent = {
  title: string;
  content: string;
};

interface IMainBlock {
  events: TEvent[];
  selection: IFilm[];
}

const MainBlock: React.FC<IMainBlock> = ({ events, selection }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.info__main}>
          <div className={styles.info__main_title}>
            Главные премьеры месяца <br /> на ваших экранах
          </div>
          <Link href="/" className={styles.info__main_subscribe}>
            Оформить подписку
            <LinkSvg />
          </Link>
        </div>
        <div className={styles.info__events}>
          <div className={styles.info__events_title}>О событиях кино</div>
          {events.map((event) => (
            <Fragment key={event.title}>
              <div className={styles.info__events_subtitle}>{event.title}</div>
              <div className={styles.info__events_content}>{event.content}</div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.selection}>
        {selection.map((film) => (
          <SelectionItem film={film} key={film.filmId} />
        ))}
      </div>
    </div>
  );
};
export default MainBlock;
