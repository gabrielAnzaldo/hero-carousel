import styles from './carousel.module.css';

const Subtitle = ({subTitle}: {subTitle: string}) => {
  return <h2 className={styles.slide_subtitle}>{subTitle}</h2>;
};

export default Subtitle;
