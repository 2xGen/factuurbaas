import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '7jfphvfh', 
  dataset: 'production', 
  apiVersion: '2024-03-10', 
  token: 'skE9L7XFZv0fTo43otjYgRPy7VlsvZCCXnCOILzxDq0SFBRgD19AN5Vx0qJW6YJnx4ZGuI2W5KmnXt66EDQ3Mkq9zDgsM7EN8brBZYWR2nj0C24D6R4ajK5ULheBgwkkx417Rd3gY7euGBTDS4xlXlwZBoYq3eloUD1yr23mLJnlMN1bLxXx', // API token
  useCdn: false, // Set to false when using a token for authenticated requests
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};