import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IFilm } from '@src/models/films';
import styles from './Slider.module.scss';
import SelectionItem from '../../selectionItem/SelectionItem';
import { Autoplay } from 'swiper';

interface ISlider {
  title: string;
  items: IFilm[];
  delay?: number;
}

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: -25,
  },
  560: {
    slidesPerView: 2,
    spaceBetween: -25,
  },
  960: {
    slidesPerView: 3,
    spaceBetween: -25,
  },
  1240: {
    slidesPerView: 4,
    spaceBetween: -1,
  }
};

const Slider: React.FC<ISlider> = ({ title, items, delay }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: delay || 3000,
        }}
        breakpoints={breakpoints}
      >
        {items?.map((item) => (
          <SwiperSlide key={item.filmId}>
            <SelectionItem film={item} isSlider />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
