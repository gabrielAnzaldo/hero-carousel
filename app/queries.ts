export const SLIDER_QUERY = `*[_type == "carousel"]{
  _id,
  title,
  "slides": slides[] {
    "media": media.asset[] {
      _type == "image" => {
        "imageUrl": asset->url,
        "imageAlt": asset->altText
      },
      _type == "file" => {
        "videoUrl": asset->url
      }
    },
    title,
    subTitle,
    description,
    ctaText,
    ctaLink
  }
}
`;
