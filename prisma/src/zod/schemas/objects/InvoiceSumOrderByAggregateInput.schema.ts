import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  net: SortOrderSchema.optional(),
  vatPerc: SortOrderSchema.optional(),
  vat: SortOrderSchema.optional(),
  gross: SortOrderSchema.optional()
}).strict();
export const InvoiceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceSumOrderByAggregateInput>;
export const InvoiceSumOrderByAggregateInputObjectZodSchema = makeSchema();
