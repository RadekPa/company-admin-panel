import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateNestedManyWithoutClientInputObjectSchema as DocumentCreateNestedManyWithoutClientInputObjectSchema } from './DocumentCreateNestedManyWithoutClientInput.schema';
import { AuthorCreateNestedManyWithoutClientInputObjectSchema as AuthorCreateNestedManyWithoutClientInputObjectSchema } from './AuthorCreateNestedManyWithoutClientInput.schema'

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
  documents: z.lazy(() => DocumentCreateNestedManyWithoutClientInputObjectSchema).optional(),
  authors: z.lazy(() => AuthorCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutInvoicesInput>;
export const ClientCreateWithoutInvoicesInputObjectZodSchema = makeSchema();
