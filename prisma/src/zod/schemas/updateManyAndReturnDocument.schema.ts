import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentSelectObjectSchema as DocumentSelectObjectSchema } from './objects/DocumentSelect.schema';
import { DocumentUpdateManyMutationInputObjectSchema as DocumentUpdateManyMutationInputObjectSchema } from './objects/DocumentUpdateManyMutationInput.schema';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema';

export const DocumentUpdateManyAndReturnSchema: z.ZodType<Prisma.DocumentUpdateManyAndReturnArgs> = z.object({ select: DocumentSelectObjectSchema.optional(), data: DocumentUpdateManyMutationInputObjectSchema, where: DocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentUpdateManyAndReturnArgs>;

export const DocumentUpdateManyAndReturnZodSchema = z.object({ select: DocumentSelectObjectSchema.optional(), data: DocumentUpdateManyMutationInputObjectSchema, where: DocumentWhereInputObjectSchema.optional() }).strict();