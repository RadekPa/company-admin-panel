import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema'

const makeSchema = () => z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  status: DocStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DocumentCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.DocumentCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateWithoutClientInput>;
export const DocumentCreateWithoutClientInputObjectZodSchema = makeSchema();
