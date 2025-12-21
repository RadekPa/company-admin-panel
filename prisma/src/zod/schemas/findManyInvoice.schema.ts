import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InvoiceIncludeObjectSchema as InvoiceIncludeObjectSchema } from './objects/InvoiceInclude.schema';
import { InvoiceOrderByWithRelationInputObjectSchema as InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema';
import { InvoiceWhereUniqueInputObjectSchema as InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema';
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceFindManySelectSchema: z.ZodType<Prisma.InvoiceSelect> = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    title: z.boolean().optional(),
    issueDate: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    net: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    vat: z.boolean().optional(),
    gross: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InvoiceSelect>;

export const InvoiceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    title: z.boolean().optional(),
    issueDate: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    net: z.boolean().optional(),
    vatPerc: z.boolean().optional(),
    vat: z.boolean().optional(),
    gross: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const InvoiceFindManySchema: z.ZodType<Prisma.InvoiceFindManyArgs> = z.object({ select: InvoiceFindManySelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InvoiceFindManyArgs>;

export const InvoiceFindManyZodSchema = z.object({ select: InvoiceFindManySelectSchema.optional(), include: z.lazy(() => InvoiceIncludeObjectSchema.optional()), orderBy: z.union([InvoiceOrderByWithRelationInputObjectSchema, InvoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: InvoiceWhereInputObjectSchema.optional(), cursor: InvoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InvoiceScalarFieldEnumSchema, InvoiceScalarFieldEnumSchema.array()]).optional() }).strict();