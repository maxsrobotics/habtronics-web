import { z, defineCollection } from "astro:content";

const resourcesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  resources: resourcesCollection,
};