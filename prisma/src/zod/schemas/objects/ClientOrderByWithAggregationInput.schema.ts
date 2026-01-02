import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientCountOrderByAggregateInputObjectSchema as ClientCountOrderByAggregateInputObjectSchema } from './ClientCountOrderByAggregateInput.schema';
import { ClientAvgOrderByAggregateInputObjectSchema as ClientAvgOrderByAggregateInputObjectSchema } from './ClientAvgOrderByAggregateInput.schema';
import { ClientMaxOrderByAggregateInputObjectSchema as ClientMaxOrderByAggregateInputObjectSchema } from './ClientMaxOrderByAggregateInput.schema';
import { ClientMinOrderByAggregateInputObjectSchema as ClientMinOrderByAggregateInputObjectSchema } from './ClientMinOrderByAggregateInput.schema';
import { ClientSumOrderByAggregateInputObjectSchema as ClientSumOrderByAggregateInputObjectSchema } from './ClientSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postalCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  regon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  legalForm: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankAccount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClientCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientOrderByWithAggregationInput>;
export const ClientOrderByWithAggregationInputObjectZodSchema = makeSchema();
