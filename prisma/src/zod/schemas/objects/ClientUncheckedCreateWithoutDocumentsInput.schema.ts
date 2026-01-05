import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema';
import { AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema as AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './AuthorUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  authors: z.lazy(() => AuthorUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutDocumentsInput>;
export const ClientUncheckedCreateWithoutDocumentsInputObjectZodSchema = makeSchema();
