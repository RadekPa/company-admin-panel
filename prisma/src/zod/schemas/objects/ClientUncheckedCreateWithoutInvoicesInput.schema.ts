import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema as DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const ClientUncheckedCreateWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUncheckedCreateWithoutInvoicesInput>;
export const ClientUncheckedCreateWithoutInvoicesInputObjectZodSchema = makeSchema();
