import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  issueDate: z.literal(true).optional(),
  paymentDate: z.literal(true).optional(),
  net: z.literal(true).optional(),
  vatPerc: z.literal(true).optional(),
  vat: z.literal(true).optional(),
  gross: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const InvoiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.InvoiceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceMaxAggregateInputType>;
export const InvoiceMaxAggregateInputObjectZodSchema = makeSchema();
