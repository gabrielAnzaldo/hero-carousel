import useEmblaCarousel from 'embla-carousel-react';
import {EmblaCarouselProps} from '../../types';
import styles from './carousel.module.css';

const EmblaCarousel = ({title, slides}: EmblaCarouselProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <h2>{title}</h2>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.map((slide) => (
            <div key={slide.title} className={styles.embla__slide}>
              {slide.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
