import styles from './carousel.module.css';

const Title = ({title}: {title: string}) => {
  return <span className={styles.slide_title}>{title}</span>;
};

export default Title;
