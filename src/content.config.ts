import { defineCollection, z } from "astro:content";

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
			img: image(),
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
			img: image(),
			name: z.string(),
			url: z.string().optional(),
			github: z.string().optional(),
			text: z.string(),
			tags: z.array(z.string()),
			featured: z.boolean().default(false),
		}),
});

export const collections = { projects, educations, works };
