import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BalanceAdjustmentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentMinOrderByAggregateInput>;
export const BalanceAdjustmentMinOrderByAggregateInputObjectZodSchema = makeSchema();
