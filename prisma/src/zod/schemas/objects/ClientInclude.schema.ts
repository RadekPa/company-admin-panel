import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentFindManySchema as DocumentFindManySchema } from '../findManyDocument.schema';
import { InvoiceFindManySchema as InvoiceFindManySchema } from '../findManyInvoice.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
  invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientIncludeObjectSchema: z.ZodType<Prisma.ClientInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientInclude>;
export const ClientIncludeObjectZodSchema = makeSchema();
