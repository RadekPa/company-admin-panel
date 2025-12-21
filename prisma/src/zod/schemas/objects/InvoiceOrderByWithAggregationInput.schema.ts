import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InvoiceCountOrderByAggregateInputObjectSchema as InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema';
import { InvoiceAvgOrderByAggregateInputObjectSchema as InvoiceAvgOrderByAggregateInputObjectSchema } from './InvoiceAvgOrderByAggregateInput.schema';
import { InvoiceMaxOrderByAggregateInputObjectSchema as InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema';
import { InvoiceMinOrderByAggregateInputObjectSchema as InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema';
import { InvoiceSumOrderByAggregateInputObjectSchema as InvoiceSumOrderByAggregateInputObjectSchema } from './InvoiceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  issueDate: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  net: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  vat: SortOrderSchema.optional(),
  gross: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => InvoiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => InvoiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => InvoiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InvoiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceOrderByWithAggregationInput>;
export const InvoiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
