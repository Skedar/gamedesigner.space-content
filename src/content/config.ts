import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDatetime: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blog,
};
