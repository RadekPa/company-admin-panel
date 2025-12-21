import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutDocumentsInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutDocumentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutDocumentsInput>;
export const ClientUncheckedCreateWithoutDocumentsInputObjectZodSchema = makeSchema();
