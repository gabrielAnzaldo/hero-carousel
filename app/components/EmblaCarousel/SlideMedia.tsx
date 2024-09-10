import styles from './carousel.module.css';
import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder({
  projectId: '7wzyhx45',
  dataset: 'production',
});

function urlFor(source: string) {
  return builder.image(source);
}

const SlideMedia = ({
  media,
}: {
  media: {mediaUrl: string; mediaAlt?: string};
}) => {
  const {mediaUrl, mediaAlt} = media;
  const isVideo = mediaUrl?.includes?.('.mov');
  if (isVideo) {
    return (
      <div className={styles.slide_video_wrapper}>
        <video
          className={styles.slide_video}
          src={mediaUrl}
          preload="auto"
          loop={true}
          autoPlay
        />
      </div>
    );
  }
  const sanityImage = urlFor(mediaUrl);
  return (
    <img
      className={styles.slide_image}
      src={sanityImage.toString()}
      alt={mediaAlt}
    />
  );
};

export default SlideMedia;
