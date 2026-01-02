import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentFindManySchema as DocumentFindManySchema } from '../findManyDocument.schema';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  nip: z.boolean().optional(),
  regon: z.boolean().optional(),
  legalForm: z.boolean().optional(),
  bankAccount: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
  invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientSelectObjectSchema: z.ZodType<Prisma.ClientSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientSelect>;
export const ClientSelectObjectZodSchema = makeSchema();
