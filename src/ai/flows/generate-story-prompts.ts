'use server';
/**
 * @fileOverview Story prompt generator flow.
 *
 * - generateStoryPrompts - A function that generates story prompts based on user input.
 * - GenerateStoryPromptsInput - The input type for the generateStoryPrompts function.
 * - GenerateStoryPromptsOutput - The return type for the generateStoryPrompts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryPromptsInputSchema = z.object({
  theme: z.string().describe('The theme of the story.'),
  keywords: z.string().describe('Keywords to include in the story.'),
});
export type GenerateStoryPromptsInput = z.infer<typeof GenerateStoryPromptsInputSchema>;

const GenerateStoryPromptsOutputSchema = z.object({
  prompt: z.string().describe('A story prompt based on the theme and keywords.'),
});
export type GenerateStoryPromptsOutput = z.infer<typeof GenerateStoryPromptsOutputSchema>;

export async function generateStoryPrompts(input: GenerateStoryPromptsInput): Promise<GenerateStoryPromptsOutput> {
  return generateStoryPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoryPromptsPrompt',
  input: {schema: GenerateStoryPromptsInputSchema},
  output: {schema: GenerateStoryPromptsOutputSchema},
  prompt: `You are a creative story prompt generator for children's stories.\n\nBased on the provided theme and keywords, generate a story prompt that can inspire a new and exciting story. The prompts should include surprising story twists.\n\nTheme: {{{theme}}}\nKeywords: {{{keywords}}}`,
});

const generateStoryPromptsFlow = ai.defineFlow(
  {
    name: 'generateStoryPromptsFlow',
    inputSchema: GenerateStoryPromptsInputSchema,
    outputSchema: GenerateStoryPromptsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
