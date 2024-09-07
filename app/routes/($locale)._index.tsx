import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {SanityDocument} from '@sanity/client';
import sanityClient from '../sanityClient';

const SLIDER_QUERY = `*[_type == "carousel"]{
  title,
  slides[]{
    image{asset->{url}},
    caption,
    link
  }
}`;

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader() {
  return {sliders: await sanityClient.fetch<SanityDocument[]>(SLIDER_QUERY)};
}

export default function Homepage() {
  const {sliders} = useLoaderData<typeof loader>();
  console.log('fetching sliders: ', sliders);

  return (
    <div className="home">
      <h2>Carousel will go here: </h2>
      {sliders.map((item) => (
        <h3 key={item.title}>{item.title}</h3>
      ))}
    </div>
  );
}
