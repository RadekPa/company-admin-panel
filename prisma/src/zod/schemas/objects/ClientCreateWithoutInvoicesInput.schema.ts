import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCreateNestedManyWithoutClientInputObjectSchema as DocumentCreateNestedManyWithoutClientInputObjectSchema } from './DocumentCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  documents: z.lazy(() => DocumentCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientCreateWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientCreateWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateWithoutInvoicesInput>;
export const ClientCreateWithoutInvoicesInputObjectZodSchema = makeSchema();
