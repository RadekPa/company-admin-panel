import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentSelectObjectSchema as DocumentSelectObjectSchema } from './objects/DocumentSelect.schema';
import { DocumentCreateManyInputObjectSchema as DocumentCreateManyInputObjectSchema } from './objects/DocumentCreateManyInput.schema';

export const DocumentCreateManyAndReturnSchema: z.ZodType<Prisma.DocumentCreateManyAndReturnArgs> = z.object({ select: DocumentSelectObjectSchema.optional(), data: z.union([ DocumentCreateManyInputObjectSchema, z.array(DocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DocumentCreateManyAndReturnArgs>;

export const DocumentCreateManyAndReturnZodSchema = z.object({ select: DocumentSelectObjectSchema.optional(), data: z.union([ DocumentCreateManyInputObjectSchema, z.array(DocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();