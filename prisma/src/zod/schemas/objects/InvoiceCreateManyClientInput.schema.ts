import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
export const InvoiceCreateManyClientInputObjectSchema: z.ZodType<Prisma.InvoiceCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateManyClientInput>;
export const InvoiceCreateManyClientInputObjectZodSchema = makeSchema();
