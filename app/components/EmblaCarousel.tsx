type Slide = {
  title: string;
  subTitle: string;
};

type EmblaCarouselProps = {
  title: string;
  slides: Slide[];
};

const EmblaCarousel = ({title, slides}: EmblaCarouselProps) => {
  return (
    <div>
      {title} - {slides?.length}
    </div>
  );
};

export default EmblaCarousel;
