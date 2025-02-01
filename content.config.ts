import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    education: defineCollection({
      type: 'data',
      source: 'education.json',
      schema: z.object({
        data: z.array(z.object({
          img: z.string(),
          name: z.string(),
          loc: z.string(),
          dur: z.string(),
          text: z.string()
        }))
      })
    }),

    work: defineCollection({
      type: 'data',
      source: 'work.json',
      schema: z.object({
        data: z.array(z.object({
          img: z.string(),
          name: z.string(),
          loc: z.string(),
          dur: z.string(),
          text: z.string()
        }))
      })
    }),

    project: defineCollection({
      type: 'data',
      source: 'project.json',
      schema: z.object({
        data: z.array(z.object({
          img: z.string(),
          name: z.string(),
          text: z.string(),
          tags: z.array(z.string())
        }))
      })
    })
  }
})
