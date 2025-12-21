import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentSelectObjectSchema as DocumentSelectObjectSchema } from './objects/DocumentSelect.schema';
import { DocumentIncludeObjectSchema as DocumentIncludeObjectSchema } from './objects/DocumentInclude.schema';
import { DocumentCreateInputObjectSchema as DocumentCreateInputObjectSchema } from './objects/DocumentCreateInput.schema';
import { DocumentUncheckedCreateInputObjectSchema as DocumentUncheckedCreateInputObjectSchema } from './objects/DocumentUncheckedCreateInput.schema';

export const DocumentCreateOneSchema: z.ZodType<Prisma.DocumentCreateArgs> = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), data: z.union([DocumentCreateInputObjectSchema, DocumentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DocumentCreateArgs>;

export const DocumentCreateOneZodSchema = z.object({ select: DocumentSelectObjectSchema.optional(), include: DocumentIncludeObjectSchema.optional(), data: z.union([DocumentCreateInputObjectSchema, DocumentUncheckedCreateInputObjectSchema]) }).strict();