import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentSelectObjectSchema as DocumentSelectObjectSchema } from './objects/DocumentSelect.schema';
import { DocumentIncludeObjectSchema as DocumentIncludeObjectSchema } from './objects/DocumentInclude.schema';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema';
import { DocumentCreateInputObjectSchema as DocumentCreateInputObjectSchema } from './objects/DocumentCreateInput.schema';
import { DocumentUncheckedCreateInputObjectSchema as DocumentUncheckedCreateInputObjectSchema } from './objects/DocumentUncheckedCreateInput.schema';
import { DocumentUpdateInputObjectSchema as DocumentUpdateInputObjectSchema } from './objects/DocumentUpdateInput.schema';
import { DocumentUncheckedUpdateInputObjectSchema as DocumentUncheckedUpdateInputObjectSchema } from './objects/DocumentUncheckedUpdateInput.schema';

export const DocumentUpsertOneSchema: z.ZodType<Prisma.DocumentUpsertArgs> = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), where: DocumentWhereUniqueInputObjectSchema, create: z.union([ DocumentCreateInputObjectSchema, DocumentUncheckedCreateInputObjectSchema ]), update: z.union([ DocumentUpdateInputObjectSchema, DocumentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DocumentUpsertArgs>;

export const DocumentUpsertOneZodSchema = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), where: DocumentWhereUniqueInputObjectSchema, create: z.union([ DocumentCreateInputObjectSchema, DocumentUncheckedCreateInputObjectSchema ]), update: z.union([ DocumentUpdateInputObjectSchema, DocumentUncheckedUpdateInputObjectSchema ]) }).strict();