import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: DocStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DocumentCreateManyClientInputObjectSchema: z.ZodType<Prisma.DocumentCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateManyClientInput>;
export const DocumentCreateManyClientInputObjectZodSchema = makeSchema();
