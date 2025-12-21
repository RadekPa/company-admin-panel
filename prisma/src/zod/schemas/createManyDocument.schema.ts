import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentCreateManyInputObjectSchema as DocumentCreateManyInputObjectSchema } from './objects/DocumentCreateManyInput.schema';

export const DocumentCreateManySchema: z.ZodType<Prisma.DocumentCreateManyArgs> = z.object({ data: z.union([ DocumentCreateManyInputObjectSchema, z.array(DocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DocumentCreateManyArgs>;

export const DocumentCreateManyZodSchema = z.object({ data: z.union([ DocumentCreateManyInputObjectSchema, z.array(DocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();