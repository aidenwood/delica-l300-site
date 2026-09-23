import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.string(),
    manualGroup: z.string(),
    manualPages: z.string(),
    applicability: z.string(),
    tools: z.array(z.string()),
    lastUpdated: z.string(),
    totalTime: z.string().optional(),
    steps: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
          required: z.boolean().default(true),
          note: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { guides };
