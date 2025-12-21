import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  updatedAt: SortOrderSchema.optional()
}).strict();
export const InvoiceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMinOrderByAggregateInput>;
export const InvoiceMinOrderByAggregateInputObjectZodSchema = makeSchema();
