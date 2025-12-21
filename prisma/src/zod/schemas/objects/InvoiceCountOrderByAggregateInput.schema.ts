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
export const InvoiceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCountOrderByAggregateInput>;
export const InvoiceCountOrderByAggregateInputObjectZodSchema = makeSchema();
