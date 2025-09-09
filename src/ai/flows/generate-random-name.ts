'use server';

/**
 * @fileOverview Generates a random, unusual name for demonstration purposes.
 *
 * - generateRandomName - A function that generates a random name.
 * - GenerateRandomNameInput - The input type for the generateRandomName function (currently empty).
 * - GenerateRandomNameOutput - The return type for the generateRandomName function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRandomNameInputSchema = z.object({});
export type GenerateRandomNameInput = z.infer<typeof GenerateRandomNameInputSchema>;

const GenerateRandomNameOutputSchema = z.object({
  name: z.string().describe('A randomly generated, unusual name.'),
});
export type GenerateRandomNameOutput = z.infer<typeof GenerateRandomNameOutputSchema>;

export async function generateRandomName(input: GenerateRandomNameInput): Promise<GenerateRandomNameOutput> {
  return generateRandomNameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRandomNamePrompt',
  input: {schema: GenerateRandomNameInputSchema},
  output: {schema: GenerateRandomNameOutputSchema},
  prompt: `You are a creative name generator. Your task is to generate a random, unusual, and slightly funny name. Be creative and unexpected.

Generate one name only.

Name:`,
});

const generateRandomNameFlow = ai.defineFlow(
  {
    name: 'generateRandomNameFlow',
    inputSchema: GenerateRandomNameInputSchema,
    outputSchema: GenerateRandomNameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
