import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IFilm } from '@src/models/films';
import styles from './Slider.module.scss';
import SelectionItem from '../selectionItem/SelectionItem';
import { Autoplay } from 'swiper';

interface ISlider {
  title: string,
  items: IFilm[],
  delay?: number,
}

const Slider: React.FC<ISlider> = ({ title, items, delay }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={-1}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: delay || 3000,
        }}
      >
        {items?.map(item => (
          <SwiperSlide key={item.filmId}>
            <SelectionItem film={item} isSlider />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;