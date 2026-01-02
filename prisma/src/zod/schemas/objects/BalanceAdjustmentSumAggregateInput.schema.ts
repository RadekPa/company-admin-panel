import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const BalanceAdjustmentSumAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentSumAggregateInputType>;
export const BalanceAdjustmentSumAggregateInputObjectZodSchema = makeSchema();
