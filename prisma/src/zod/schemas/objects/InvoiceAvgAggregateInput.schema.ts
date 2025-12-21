import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  net: z.literal(true).optional(),
  vatPerc: z.literal(true).optional(),
  vat: z.literal(true).optional(),
  gross: z.literal(true).optional()
}).strict();
export const InvoiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceAvgAggregateInputType>;
export const InvoiceAvgAggregateInputObjectZodSchema = makeSchema();
