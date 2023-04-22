import React from 'react';
import styles from './MainBlock.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import LinkSvg from '@assets/icons/link.svg';
import { IFilm } from '@src/models/films';
import SelectionItem from '@src/components/selectionItem/SelectionItem';

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
                {selection.map(film => <SelectionItem film={film} />)}
            </div>
        </div>
    )
}
export default MainBlock;