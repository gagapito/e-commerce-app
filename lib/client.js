import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'supwa89a',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);