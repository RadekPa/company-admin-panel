import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BalanceAdjustmentMinAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentMinAggregateInputType>;
export const BalanceAdjustmentMinAggregateInputObjectZodSchema = makeSchema();
