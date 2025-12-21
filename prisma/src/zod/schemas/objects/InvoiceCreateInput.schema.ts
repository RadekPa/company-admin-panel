import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateNestedOneWithoutInvoicesInputObjectSchema as ClientCreateNestedOneWithoutInvoicesInputObjectSchema } from './ClientCreateNestedOneWithoutInvoicesInput.schema'

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
  client: z.lazy(() => ClientCreateNestedOneWithoutInvoicesInputObjectSchema)
}).strict();
export const InvoiceCreateInputObjectSchema: z.ZodType<Prisma.InvoiceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateInput>;
export const InvoiceCreateInputObjectZodSchema = makeSchema();
