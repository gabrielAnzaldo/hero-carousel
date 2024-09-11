import styles from './carousel.module.css';

const CTAButton = ({ctaText, ctaLink}: {ctaText: string; ctaLink: string}) => {
  return (
    <a tabIndex={-1} href={ctaLink} target={'_blank'} aria-label={ctaText}>
      <span className={styles.slide_cta_button}>{ctaText}</span>
    </a>
  );
};

export default CTAButton;
