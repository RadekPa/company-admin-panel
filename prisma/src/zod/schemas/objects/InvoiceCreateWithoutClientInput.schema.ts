import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
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
export const InvoiceCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.InvoiceCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateWithoutClientInput>;
export const InvoiceCreateWithoutClientInputObjectZodSchema = makeSchema();
