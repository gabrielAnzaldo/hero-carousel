type Slide = {
  title: string;
  subTitle: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  media: any;
};

export type EmblaCarouselProps = {
  title: string;
  slides: Slide[];
};
