import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema';

export const DocumentDeleteManySchema: z.ZodType<Prisma.DocumentDeleteManyArgs> = z.object({ where: DocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentDeleteManyArgs>;

export const DocumentDeleteManyZodSchema = z.object({ where: DocumentWhereInputObjectSchema.optional() }).strict();