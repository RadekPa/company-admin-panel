import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema as DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutClientInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema'

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
  documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutAuthorsInput>;
export const ClientUncheckedCreateWithoutAuthorsInputObjectZodSchema = makeSchema();
