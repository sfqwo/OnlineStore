import React from 'react';
import styles from './MainBlock.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import LinkSvg from '@assets/icons/link.svg';
import { IFilm } from '@src/models/films';

type TEvent = {
    title: string;
    content: string;
}

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
                        Главные премьеры месяца <br/> на ваших экранах
                    </div>
                    <Link href='/login' className={styles.info__main_subscribe}>
                        Оформить подписку
                        <LinkSvg />
                    </Link>
                </div>
                <div className={styles.info__events}>
                    <div className={styles.info__events_title}>О событиях кино</div>
                    {events.map((event) => (
                        <>
                            <div className={styles.info__events_subtitle}>{event.title}</div>
                            <div className={styles.info__events_content}>{event.content}</div>
                        </>
                    ))}
                </div>
            </div>
            <div className={styles.selection}>
                {selection.map(film => (
                    <Link href='/' className={styles.selection__film}>
                        <div className={styles.selection__film_info}>{film.nameRu}</div>
                        <div className={styles.selection__film_info}>
                            {film.year}
                            <br/>
                            {film.genres.map(g => g.genre + ',  ')}
                            </div>
                        <div style={{ backgroundImage: `url(${film.posterUrl})`}} className={styles.selection__film_img} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default MainBlock;