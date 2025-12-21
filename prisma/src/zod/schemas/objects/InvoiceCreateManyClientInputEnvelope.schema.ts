import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateManyClientInputObjectSchema as InvoiceCreateManyClientInputObjectSchema } from './InvoiceCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InvoiceCreateManyClientInputObjectSchema), z.lazy(() => InvoiceCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InvoiceCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.InvoiceCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceCreateManyClientInputEnvelope>;
export const InvoiceCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
