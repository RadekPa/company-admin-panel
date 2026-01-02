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
export const BalanceAdjustmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentCountOrderByAggregateInput>;
export const BalanceAdjustmentCountOrderByAggregateInputObjectZodSchema = makeSchema();
