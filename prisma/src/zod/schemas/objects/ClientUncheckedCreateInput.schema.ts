import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema as DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutClientInput.schema';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateInput>;
export const ClientUncheckedCreateInputObjectZodSchema = makeSchema();
