import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DocumentCountOrderByAggregateInputObjectSchema as DocumentCountOrderByAggregateInputObjectSchema } from './DocumentCountOrderByAggregateInput.schema';
import { DocumentAvgOrderByAggregateInputObjectSchema as DocumentAvgOrderByAggregateInputObjectSchema } from './DocumentAvgOrderByAggregateInput.schema';
import { DocumentMaxOrderByAggregateInputObjectSchema as DocumentMaxOrderByAggregateInputObjectSchema } from './DocumentMaxOrderByAggregateInput.schema';
import { DocumentMinOrderByAggregateInputObjectSchema as DocumentMinOrderByAggregateInputObjectSchema } from './DocumentMinOrderByAggregateInput.schema';
import { DocumentSumOrderByAggregateInputObjectSchema as DocumentSumOrderByAggregateInputObjectSchema } from './DocumentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  _count: z.lazy(() => DocumentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DocumentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DocumentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DocumentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DocumentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DocumentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentOrderByWithAggregationInput>;
export const DocumentOrderByWithAggregationInputObjectZodSchema = makeSchema();
