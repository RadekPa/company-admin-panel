import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateManyClientInputObjectSchema as DocumentCreateManyClientInputObjectSchema } from './DocumentCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DocumentCreateManyClientInputObjectSchema), z.lazy(() => DocumentCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DocumentCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.DocumentCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateManyClientInputEnvelope>;
export const DocumentCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
