import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentUpdateManyMutationInputObjectSchema as DocumentUpdateManyMutationInputObjectSchema } from './objects/DocumentUpdateManyMutationInput.schema';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema';

export const DocumentUpdateManySchema: z.ZodType<Prisma.DocumentUpdateManyArgs> = z.object({ data: DocumentUpdateManyMutationInputObjectSchema, where: DocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentUpdateManyArgs>;

export const DocumentUpdateManyZodSchema = z.object({ data: DocumentUpdateManyMutationInputObjectSchema, where: DocumentWhereInputObjectSchema.optional() }).strict();