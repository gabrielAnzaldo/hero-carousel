import useEmblaCarousel from 'embla-carousel-react';
import {EmblaCarouselProps} from '../types';

const EmblaCarousel = ({title, slides}: EmblaCarouselProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <h2>{title}</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((slide) => (
            <div key={slide.title} className="embla__slide">
              {slide.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
