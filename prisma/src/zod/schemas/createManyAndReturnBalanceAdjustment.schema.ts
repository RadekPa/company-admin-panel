import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentCreateManyInputObjectSchema as BalanceAdjustmentCreateManyInputObjectSchema } from './objects/BalanceAdjustmentCreateManyInput.schema';

export const BalanceAdjustmentCreateManyAndReturnSchema: z.ZodType<Prisma.BalanceAdjustmentCreateManyAndReturnArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(), data: z.union([ BalanceAdjustmentCreateManyInputObjectSchema, z.array(BalanceAdjustmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentCreateManyAndReturnArgs>;

export const BalanceAdjustmentCreateManyAndReturnZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(), data: z.union([ BalanceAdjustmentCreateManyInputObjectSchema, z.array(BalanceAdjustmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();