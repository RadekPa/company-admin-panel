import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DocumentOrderByRelationAggregateInputObjectSchema as DocumentOrderByRelationAggregateInputObjectSchema } from './DocumentOrderByRelationAggregateInput.schema';
import { InvoiceOrderByRelationAggregateInputObjectSchema as InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  documents: z.lazy(() => DocumentOrderByRelationAggregateInputObjectSchema).optional(),
  invoices: z.lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientOrderByWithRelationInput>;
export const ClientOrderByWithRelationInputObjectZodSchema = makeSchema();
