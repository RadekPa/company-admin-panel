import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentOrderByWithRelationInputObjectSchema as BalanceAdjustmentOrderByWithRelationInputObjectSchema } from './objects/BalanceAdjustmentOrderByWithRelationInput.schema';
import { BalanceAdjustmentWhereInputObjectSchema as BalanceAdjustmentWhereInputObjectSchema } from './objects/BalanceAdjustmentWhereInput.schema';
import { BalanceAdjustmentWhereUniqueInputObjectSchema as BalanceAdjustmentWhereUniqueInputObjectSchema } from './objects/BalanceAdjustmentWhereUniqueInput.schema';
import { BalanceAdjustmentScalarFieldEnumSchema } from './enums/BalanceAdjustmentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BalanceAdjustmentFindFirstSelectSchema: z.ZodType<Prisma.BalanceAdjustmentSelect> = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    amount: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentSelect>;

export const BalanceAdjustmentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    amount: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BalanceAdjustmentFindFirstSchema: z.ZodType<Prisma.BalanceAdjustmentFindFirstArgs> = z.object({ select: BalanceAdjustmentFindFirstSelectSchema.optional(),  orderBy: z.union([BalanceAdjustmentOrderByWithRelationInputObjectSchema, BalanceAdjustmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: BalanceAdjustmentWhereInputObjectSchema.optional(), cursor: BalanceAdjustmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BalanceAdjustmentScalarFieldEnumSchema, BalanceAdjustmentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentFindFirstArgs>;

export const BalanceAdjustmentFindFirstZodSchema = z.object({ select: BalanceAdjustmentFindFirstSelectSchema.optional(),  orderBy: z.union([BalanceAdjustmentOrderByWithRelationInputObjectSchema, BalanceAdjustmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: BalanceAdjustmentWhereInputObjectSchema.optional(), cursor: BalanceAdjustmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BalanceAdjustmentScalarFieldEnumSchema, BalanceAdjustmentScalarFieldEnumSchema.array()]).optional() }).strict();