import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '6lhm1v69',
    dataset: 'production',
    apiVersion: '2023-05-11',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)