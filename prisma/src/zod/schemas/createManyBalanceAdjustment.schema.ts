import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentCreateManyInputObjectSchema as BalanceAdjustmentCreateManyInputObjectSchema } from './objects/BalanceAdjustmentCreateManyInput.schema';

export const BalanceAdjustmentCreateManySchema: z.ZodType<Prisma.BalanceAdjustmentCreateManyArgs> = z.object({ data: z.union([ BalanceAdjustmentCreateManyInputObjectSchema, z.array(BalanceAdjustmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentCreateManyArgs>;

export const BalanceAdjustmentCreateManyZodSchema = z.object({ data: z.union([ BalanceAdjustmentCreateManyInputObjectSchema, z.array(BalanceAdjustmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();