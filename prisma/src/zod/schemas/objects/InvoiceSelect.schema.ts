import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clientId: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  title: z.boolean().optional(),
  issueDate: z.boolean().optional(),
  paymentDate: z.boolean().optional(),
  net: z.boolean().optional(),
  vatPerc: z.boolean().optional(),
  vat: z.boolean().optional(),
  gross: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const InvoiceSelectObjectSchema: z.ZodType<Prisma.InvoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceSelect>;
export const InvoiceSelectObjectZodSchema = makeSchema();
