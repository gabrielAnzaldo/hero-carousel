export const SLIDER_QUERY = `*[_type == "carousel"]{
  _id,
  title,
  "slides": slides[] {
    "media": media.asset[] {
      _type == "image" => {
        "mediaUrl": asset->url,
        "mediaAlt": alt
      },
      _type == "file" => {
        "mediaUrl": asset->url
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
