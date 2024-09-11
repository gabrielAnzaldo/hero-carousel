import {useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {Icon} from '@iconify/react';
import {EmblaCarouselProps} from '../../types';
import SlideContent from './SlideContent';
import SlideMedia from './SlideMedia';
import styles from './carousel.module.css';

const EmblaCarousel = ({title, slides}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      {/* <h2>{title}</h2> */}
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides?.map((slide) => {
              console.log('single slide: ', slide);
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
        <div className={styles.embla__buttons} aria-label="Carousel Controls">
          <button
            tabIndex={1}
            className={styles.embla__prev}
            aria-label="Previous Slide"
            onClick={onPrevButtonClick}
          >
            <Icon icon="bi:arrow-left" />
          </button>
          <button
            tabIndex={2}
            className={styles.embla__next}
            aria-label="Next Slide"
            onClick={onNextButtonClick}
          >
            <Icon icon="bi:arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
