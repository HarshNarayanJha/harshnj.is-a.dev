import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: z.preprocess(val => val ? `@/img/projects/${val}` : "", image()),
      name: z.string(),
      url: z.string().optional(),
      github: z.string().optional(),
      text: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: z.preprocess(val => val ? `@/img/testimonials/${val}` : "", image()),
      name: z.string(),
      at: z.string(),
      position: z.string(),
      title: z.string(),
      text: z.string(),
      isPublished: z.boolean().default(false)
    }),
});

const experiences = defineCollection({
  loader: file("src/content/experiences.json"),
  schema: ({ image }) => z.object({
    id: z.number().int().positive(),
    start: z.coerce.date(),
    end: z.coerce.date().or(z.literal("PRESENT")),
    role: z.string(),
    type: z.enum(["work", "education"]),
    level: z.number().int().positive(),
    at: z.string(),
    logo: z.preprocess(val => val ? `@/img/work/${val}` : "", image()).optional(),
    link: z.string().optional(),
    location: z.string(),
    description: z.string(),
    points: z.array(z.string()),
  }),
});

const blogs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      isPublished: z.boolean().default(false),
      pubDate: z.date().optional(),
      description: z.string().max(70),
      author: z.string(),
      image: z.preprocess(val => val ? `@/img/blogs/${val}` : "", image()).optional(),
      tags: z.array(z.string()),
      theme: z.enum(["green", "blue", "normal"]).optional().default("normal")
    })
})

export const collections = { projects, testimonials, experiences, blogs };
