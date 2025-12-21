import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentSelectObjectSchema as DocumentSelectObjectSchema } from './objects/DocumentSelect.schema';
import { DocumentIncludeObjectSchema as DocumentIncludeObjectSchema } from './objects/DocumentInclude.schema';
import { DocumentUpdateInputObjectSchema as DocumentUpdateInputObjectSchema } from './objects/DocumentUpdateInput.schema';
import { DocumentUncheckedUpdateInputObjectSchema as DocumentUncheckedUpdateInputObjectSchema } from './objects/DocumentUncheckedUpdateInput.schema';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema';

export const DocumentUpdateOneSchema: z.ZodType<Prisma.DocumentUpdateArgs> = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), data: z.union([DocumentUpdateInputObjectSchema, DocumentUncheckedUpdateInputObjectSchema]), where: DocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DocumentUpdateArgs>;

export const DocumentUpdateOneZodSchema = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), data: z.union([DocumentUpdateInputObjectSchema, DocumentUncheckedUpdateInputObjectSchema]), where: DocumentWhereUniqueInputObjectSchema }).strict();