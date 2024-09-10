import useEmblaCarousel from 'embla-carousel-react';
import {EmblaCarouselProps} from '../../types';
import SlideContent from './SlideContent';
import SlideMedia from './SlideMedia';
import styles from './carousel.module.css';

const EmblaCarousel = ({title, slides}: EmblaCarouselProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <h2>{title}</h2>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.map((slide) => {
            // console.log('single slide: ', slide);
            return (
              <div key={slide.title} className={styles.embla__slide}>
                <SlideContent
                  title={slide.title}
                  subTitle={slide.subTitle}
                  description={slide.description}
                  ctaLink={slide.ctaLink}
                  ctaText={slide.ctaText}
                />
                <SlideMedia media={slide.media?.[0]} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
