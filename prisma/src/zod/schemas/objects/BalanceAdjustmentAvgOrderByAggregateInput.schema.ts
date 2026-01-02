import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional()
}).strict();
export const BalanceAdjustmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentAvgOrderByAggregateInput>;
export const BalanceAdjustmentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
