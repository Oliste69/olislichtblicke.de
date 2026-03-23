import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset:   import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// ── Queries ──────────────────────────────────────

export async function getPhotos(category?: string) {
  const filter = category
    ? `*[_type == "photo" && category->slug.current == $category]`
    : `*[_type == "photo"]`
  return client.fetch(`${filter} | order(_createdAt desc) { _id, title, category->{title, slug}, image, alt }`, { category })
}

export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, mainImage
    }
  `)
}

export async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, excerpt, mainImage, body
    }
  `, { slug })
}
