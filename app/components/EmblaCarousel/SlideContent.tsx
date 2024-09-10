import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';
import CTAButton from './CTAButton';
import styles from './carousel.module.css';

type SlideContentProps = {
  title: string;
  subTitle: string;
  description: string;
  ctaLink: string;
  ctaText: string;
};

const SlideContent = ({
  title,
  subTitle,
  description,
  ctaLink,
  ctaText,
}: SlideContentProps) => {
  return (
    <div className={styles.slide_content}>
      <Title title={title} />
      <Subtitle subTitle={subTitle} />
      <Description description={description} />
      <CTAButton ctaText={ctaText} ctaLink={ctaLink} />
    </div>
  );
};

export default SlideContent;
