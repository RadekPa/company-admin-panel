import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { ClientCreateNestedOneWithoutDocumentsInputObjectSchema as ClientCreateNestedOneWithoutDocumentsInputObjectSchema } from './ClientCreateNestedOneWithoutDocumentsInput.schema'

const makeSchema = () => z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  status: DocStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  client: z.lazy(() => ClientCreateNestedOneWithoutDocumentsInputObjectSchema)
}).strict();
export const DocumentCreateInputObjectSchema: z.ZodType<Prisma.DocumentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateInput>;
export const DocumentCreateInputObjectZodSchema = makeSchema();
