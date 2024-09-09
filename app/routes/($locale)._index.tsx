import {useLoaderData, type MetaFunction} from '@remix-run/react';
import {SanityDocument} from '@sanity/client';
import EmblaCarousel from '../components/EmblaCarousel';
import {SLIDER_QUERY} from '../queries';
import sanityClient from '../sanityClient';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader() {
  return {sliders: await sanityClient.fetch<SanityDocument[]>(SLIDER_QUERY)};
}

export default function Homepage() {
  const {sliders} = useLoaderData<typeof loader>();

  return (
    <div className="home">
      <h1>Carousels: </h1>
      {sliders.map((item) => {
        if (item?.slides?.length > 1) console.log('iteem -> ', item);
        return (
          <section key={item._id}>
            <EmblaCarousel title={item.title} slides={item.slides} />
          </section>
        );
      })}
    </div>
  );
}
