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
			text: z.string(),
			tags: z.array(z.string()),
		}),
});

export const collections = { projects, educations, works };
