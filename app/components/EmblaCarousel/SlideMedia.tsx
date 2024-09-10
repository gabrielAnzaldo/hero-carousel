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
    return <video>this is a video</video>;
  }
  const sanityImage = urlFor(mediaUrl);
  console.log('test: ', sanityImage.width(200).url());
  return <img src={sanityImage.toString()} alt={mediaAlt} />;
};

export default SlideMedia;
