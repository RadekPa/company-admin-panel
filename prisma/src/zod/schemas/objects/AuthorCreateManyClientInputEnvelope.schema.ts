import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorCreateManyClientInputObjectSchema as AuthorCreateManyClientInputObjectSchema } from './AuthorCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuthorCreateManyClientInputObjectSchema), z.lazy(() => AuthorCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuthorCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.AuthorCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateManyClientInputEnvelope>;
export const AuthorCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
