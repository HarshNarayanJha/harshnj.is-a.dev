import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const educations = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: image(),
      name: z.string(),
      location: z.string(),
      duration: z.string(),
      text: z.string(),
    }),
});

const works = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: z.preprocess(val => `@images/work/${val}`, image()),
      name: z.string(),
      location: z.string(),
      duration: z.string(),
      fromTo: z.string(),
      text: z.string(),
    }),
});

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      img: z.preprocess(val => `@images/projects/${val}`, image()),
      name: z.string(),
      url: z.string().optional(),
      github: z.string().optional(),
      text: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
    }),
});

const experiences = defineCollection({
  loader: file("src/content/experiences.json", { parser: (text) => JSON.parse(text).experiences }),
  schema: z.object({
    id: z.number().int().positive(),
    start: z.coerce.date(),
    end: z.coerce.date().or(z.literal("PRESENT")),
    role: z.string(),
    type: z.enum(["work", "education"]),
    level: z.number().int().positive(),
    at: z.string(),
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
      image: z.preprocess(val => `@images/blogs/${val}`, image()).optional(),
      tags: z.array(z.string())
    })
})

export const collections = { projects, educations, works, experiences, blogs };
