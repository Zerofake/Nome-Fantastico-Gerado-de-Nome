'use server';
/**
 * @fileOverview A flow to customize name generation with tools.
 *
 * - customizeNameGeneration - A function that generates a name based on selected tools.
 * - CustomizeNameGenerationInput - The input type for the customizeNameGeneration function.
 * - CustomizeNameGenerationOutput - The return type for the customizeNameGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StructureSchema = z.enum(['rhythmic', 'syllabic']);

const CustomizeNameGenerationInputSchema = z.object({
  structure: StructureSchema.describe('The structure to influence the generated name.'),
});
export type CustomizeNameGenerationInput = z.infer<typeof CustomizeNameGenerationInputSchema>;

const CustomizeNameGenerationOutputSchema = z.object({
  name: z.string().describe('The generated name.'),
});
export type CustomizeNameGenerationOutput = z.infer<typeof CustomizeNameGenerationOutputSchema>;

const rhythmicStructureTool = ai.defineTool({
  name: 'rhythmicStructure',
  description: 'Concatenates syllables to create a rhythmic name structure.',
  inputSchema: z.object({
    base: z.string().describe('The base string to build the name from.'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  return `${input.base}-rhythmic`;
});

const syllabicStructureTool = ai.defineTool({
  name: 'syllabicStructure',
  description: 'Combines syllables to create a syllabic name structure.',
  inputSchema: z.object({
    base: z.string().describe('The base string to build the name from.'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  return `${input.base}-syllabic`;
});

export async function customizeNameGeneration(input: CustomizeNameGenerationInput): Promise<CustomizeNameGenerationOutput> {
  return customizeNameGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeNameGenerationPrompt',
  input: {schema: CustomizeNameGenerationInputSchema},
  output: {schema: CustomizeNameGenerationOutputSchema},
  tools: [rhythmicStructureTool, syllabicStructureTool],
  prompt: `Generate a unique and unusual name.

  The user wants you to influence the structure of the name using the available tools. Depending on the desired {{structure}}, you should call the appropriate tool to influence the name generation.

  Regardless of the tool you call, the final generated name should be unique and unusual.
  `,
});

const customizeNameGenerationFlow = ai.defineFlow(
  {
    name: 'customizeNameGenerationFlow',
    inputSchema: CustomizeNameGenerationInputSchema,
    outputSchema: CustomizeNameGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
