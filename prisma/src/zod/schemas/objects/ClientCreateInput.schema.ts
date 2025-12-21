import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateNestedManyWithoutClientInputObjectSchema as DocumentCreateNestedManyWithoutClientInputObjectSchema } from './DocumentCreateNestedManyWithoutClientInput.schema';
import { InvoiceCreateNestedManyWithoutClientInputObjectSchema as InvoiceCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  documents: z.lazy(() => DocumentCreateNestedManyWithoutClientInputObjectSchema).optional(),
  invoices: z.lazy(() => InvoiceCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateInputObjectSchema: z.ZodType<Prisma.ClientCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateInput>;
export const ClientCreateInputObjectZodSchema = makeSchema();
