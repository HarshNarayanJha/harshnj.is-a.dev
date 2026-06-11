import type { CollectionEntry } from "astro:content"

export type ProjectData = CollectionEntry<"projects">["data"] & {
  id: CollectionEntry<"projects">["id"]
}

export type ProjectDataDomains = ProjectData["domains"][number]
