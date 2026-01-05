import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuthorCountOrderByAggregateInputObjectSchema as AuthorCountOrderByAggregateInputObjectSchema } from './AuthorCountOrderByAggregateInput.schema';
import { AuthorAvgOrderByAggregateInputObjectSchema as AuthorAvgOrderByAggregateInputObjectSchema } from './AuthorAvgOrderByAggregateInput.schema';
import { AuthorMaxOrderByAggregateInputObjectSchema as AuthorMaxOrderByAggregateInputObjectSchema } from './AuthorMaxOrderByAggregateInput.schema';
import { AuthorMinOrderByAggregateInputObjectSchema as AuthorMinOrderByAggregateInputObjectSchema } from './AuthorMinOrderByAggregateInput.schema';
import { AuthorSumOrderByAggregateInputObjectSchema as AuthorSumOrderByAggregateInputObjectSchema } from './AuthorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  personalEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  photos: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AuthorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AuthorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AuthorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AuthorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AuthorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AuthorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AuthorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorOrderByWithAggregationInput>;
export const AuthorOrderByWithAggregationInputObjectZodSchema = makeSchema();
