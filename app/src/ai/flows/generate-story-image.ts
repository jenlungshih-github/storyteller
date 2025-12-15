'use server';

/**
 * @fileOverview A story image generation AI agent.
 *
 * - generateStoryImage - A function that generates an image for a story.
 * - GenerateStoryImageInput - The input type for the generateStoryImage function.
 * - GenerateStoryImageOutput - The return type for the generateStoryImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryImageInputSchema = z.object({
  summary: z.string().describe('The summary of the story to generate an image for.'),
});
export type GenerateStoryImageInput = z.infer<typeof GenerateStoryImageInputSchema>;

const GenerateStoryImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateStoryImageOutput = z.infer<typeof GenerateStoryImageOutputSchema>;

export async function generateStoryImage(input: GenerateStoryImageInput): Promise<GenerateStoryImageOutput> {
  return generateStoryImageFlow(input);
}

const generateStoryImageFlow = ai.defineFlow(
  {
    name: 'generateStoryImageFlow',
    inputSchema: GenerateStoryImageInputSchema,
    outputSchema: GenerateStoryImageOutputSchema,
  },
  async input => {
    const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `Generate a beautiful and whimsical children's storybook illustration based on the following summary: ${input.summary}. The style should be colorful, friendly, and magical.`,
    });
    
    return {
        imageUrl: media.url,
    };
  }
);
