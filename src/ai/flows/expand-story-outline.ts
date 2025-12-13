'use server';

/**
 * @fileOverview A story expansion AI agent.
 *
 * - expandStoryOutline - A function that expands a story outline into a complete children's story.
 * - ExpandStoryOutlineInput - The input type for the expandStoryOutline function.
 * - ExpandStoryOutlineOutput - The return type for the expandStoryOutline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpandStoryOutlineInputSchema = z.object({
  outline: z.string().describe('The outline of the story to expand.'),
});
export type ExpandStoryOutlineInput = z.infer<typeof ExpandStoryOutlineInputSchema>;

const ExpandStoryOutlineOutputSchema = z.object({
  story: z.string().describe('The expanded story.'),
});
export type ExpandStoryOutlineOutput = z.infer<typeof ExpandStoryOutlineOutputSchema>;

export async function expandStoryOutline(input: ExpandStoryOutlineInput): Promise<ExpandStoryOutlineOutput> {
  return expandStoryOutlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'expandStoryOutlinePrompt',
  input: {schema: ExpandStoryOutlineInputSchema},
  output: {schema: ExpandStoryOutlineOutputSchema},
  prompt: `You are a children's story writer. Expand the following outline into a complete, engaging children's story.\n\nOutline: {{{outline}}}`,
});

const expandStoryOutlineFlow = ai.defineFlow(
  {
    name: 'expandStoryOutlineFlow',
    inputSchema: ExpandStoryOutlineInputSchema,
    outputSchema: ExpandStoryOutlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
