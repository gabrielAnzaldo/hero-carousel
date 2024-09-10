import styles from './carousel.module.css';

const CTAButton = ({ctaText, ctaLink}: {ctaText: string; ctaLink: string}) => {
  return (
    <a href={ctaLink} target={'_blank'}>
      <span className={styles.slide_cta_button}>{ctaText}</span>
    </a>
  );
};

export default CTAButton;
