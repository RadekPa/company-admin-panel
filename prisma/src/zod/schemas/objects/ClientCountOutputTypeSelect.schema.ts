import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCountOutputTypeCountDocumentsArgsObjectSchema as ClientCountOutputTypeCountDocumentsArgsObjectSchema } from './ClientCountOutputTypeCountDocumentsArgs.schema';
import { ClientCountOutputTypeCountInvoicesArgsObjectSchema as ClientCountOutputTypeCountInvoicesArgsObjectSchema } from './ClientCountOutputTypeCountInvoicesArgs.schema';
import { ClientCountOutputTypeCountAuthorsArgsObjectSchema as ClientCountOutputTypeCountAuthorsArgsObjectSchema } from './ClientCountOutputTypeCountAuthorsArgs.schema'

const makeSchema = () => z.object({
  documents: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountDocumentsArgsObjectSchema)]).optional(),
  invoices: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountInvoicesArgsObjectSchema)]).optional(),
  authors: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountAuthorsArgsObjectSchema)]).optional()
}).strict();
export const ClientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOutputTypeSelect>;
export const ClientCountOutputTypeSelectObjectZodSchema = makeSchema();
