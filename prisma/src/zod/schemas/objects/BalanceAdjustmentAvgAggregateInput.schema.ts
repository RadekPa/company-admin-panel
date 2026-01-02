import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional()
}).strict();
export const BalanceAdjustmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentAvgAggregateInputType>;
export const BalanceAdjustmentAvgAggregateInputObjectZodSchema = makeSchema();
