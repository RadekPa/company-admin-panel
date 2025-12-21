import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const InvoiceIncludeObjectSchema: z.ZodType<Prisma.InvoiceInclude> = makeSchema() as unknown as z.ZodType<Prisma.InvoiceInclude>;
export const InvoiceIncludeObjectZodSchema = makeSchema();
