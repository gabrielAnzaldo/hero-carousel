import {createClient} from '@sanity/client';

const sanityClient = createClient({
  projectId: '7wzyhx45',
  dataset: 'production',
  apiVersion: '2023-09-01',
  useCdn: false,
});

export default sanityClient;
