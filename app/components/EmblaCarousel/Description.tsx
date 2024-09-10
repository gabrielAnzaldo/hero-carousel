import styles from './carousel.module.css';

const Description = ({description}: {description: string}) => {
  return <p className={styles.slide_description}>{description}</p>;
};

export default Description;
