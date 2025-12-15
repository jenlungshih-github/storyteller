import { config } from 'dotenv';
config();

import '@/ai/flows/generate-story-prompts.ts';
import '@/ai/flows/expand-story-outline.ts';
import '@/ai/flows/generate-story-image.ts';
