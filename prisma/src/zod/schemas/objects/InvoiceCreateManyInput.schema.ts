import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  clientId: z.number().int(),
  title: z.string(),
  issueDate: z.coerce.date(),
  paymentDate: z.coerce.date(),
  net: z.number(),
  vatPerc: z.number().int(),
  vat: z.number(),
  gross: z.number(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const InvoiceCreateManyInputObjectSchema: z.ZodType<Prisma.InvoiceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateManyInput>;
export const InvoiceCreateManyInputObjectZodSchema = makeSchema();
