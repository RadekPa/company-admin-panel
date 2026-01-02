import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateNestedManyWithoutClientInputObjectSchema as InvoiceCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  nip: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  legalForm: z.string().optional().nullable(),
  bankAccount: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invoices: z.lazy(() => InvoiceCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutDocumentsInput>;
export const ClientCreateWithoutDocumentsInputObjectZodSchema = makeSchema();
