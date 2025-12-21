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
export const InvoiceSumAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceSumAggregateInputType>;
export const InvoiceSumAggregateInputObjectZodSchema = makeSchema();
