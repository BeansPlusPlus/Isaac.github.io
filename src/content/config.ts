import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    isPublish: z.boolean(),
  }),
})

export const collections = { posts: postsCollection }
