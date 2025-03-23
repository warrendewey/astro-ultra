import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(), 
        image: image(), 
        title: z.string(),
        tags: z.array(z.string()).optional(),
    })
});

export const collections = {
    posts: postsCollection,
};