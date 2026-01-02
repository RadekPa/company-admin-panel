import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BalanceAdjustmentCountOrderByAggregateInputObjectSchema as BalanceAdjustmentCountOrderByAggregateInputObjectSchema } from './BalanceAdjustmentCountOrderByAggregateInput.schema';
import { BalanceAdjustmentAvgOrderByAggregateInputObjectSchema as BalanceAdjustmentAvgOrderByAggregateInputObjectSchema } from './BalanceAdjustmentAvgOrderByAggregateInput.schema';
import { BalanceAdjustmentMaxOrderByAggregateInputObjectSchema as BalanceAdjustmentMaxOrderByAggregateInputObjectSchema } from './BalanceAdjustmentMaxOrderByAggregateInput.schema';
import { BalanceAdjustmentMinOrderByAggregateInputObjectSchema as BalanceAdjustmentMinOrderByAggregateInputObjectSchema } from './BalanceAdjustmentMinOrderByAggregateInput.schema';
import { BalanceAdjustmentSumOrderByAggregateInputObjectSchema as BalanceAdjustmentSumOrderByAggregateInputObjectSchema } from './BalanceAdjustmentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BalanceAdjustmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BalanceAdjustmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BalanceAdjustmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BalanceAdjustmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BalanceAdjustmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BalanceAdjustmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentOrderByWithAggregationInput>;
export const BalanceAdjustmentOrderByWithAggregationInputObjectZodSchema = makeSchema();
