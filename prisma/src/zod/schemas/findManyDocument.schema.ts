import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentIncludeObjectSchema as DocumentIncludeObjectSchema } from './objects/DocumentInclude.schema';
import { DocumentOrderByWithRelationInputObjectSchema as DocumentOrderByWithRelationInputObjectSchema } from './objects/DocumentOrderByWithRelationInput.schema';
import { DocumentWhereInputObjectSchema as DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema';
import { DocumentWhereUniqueInputObjectSchema as DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema';
import { DocumentScalarFieldEnumSchema } from './enums/DocumentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentFindManySelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DocumentSelect>;

export const DocumentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional()
  }).strict();

export const DocumentFindManySchema: z.ZodType<Prisma.DocumentFindManyArgs> = z.object({ select: DocumentFindManySelectSchema.optional(), include: z.lazy(() => DocumentIncludeObjectSchema.optional()), orderBy: z.union([DocumentOrderByWithRelationInputObjectSchema, DocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentWhereInputObjectSchema.optional(), cursor: DocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DocumentScalarFieldEnumSchema, DocumentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DocumentFindManyArgs>;

export const DocumentFindManyZodSchema = z.object({ select: DocumentFindManySelectSchema.optional(), include: z.lazy(() => DocumentIncludeObjectSchema.optional()), orderBy: z.union([DocumentOrderByWithRelationInputObjectSchema, DocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentWhereInputObjectSchema.optional(), cursor: DocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DocumentScalarFieldEnumSchema, DocumentScalarFieldEnumSchema.array()]).optional() }).strict();