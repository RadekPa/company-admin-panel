import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateNestedManyWithoutClientInputObjectSchema as InvoiceCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invoices: z.lazy(() => InvoiceCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutDocumentsInput>;
export const ClientCreateWithoutDocumentsInputObjectZodSchema = makeSchema();
