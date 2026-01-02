import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DocumentListRelationFilterObjectSchema as DocumentListRelationFilterObjectSchema } from './DocumentListRelationFilter.schema';
import { InvoiceListRelationFilterObjectSchema as InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema'

const clientwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientWhereInputObjectSchema), z.lazy(() => ClientWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  postalCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  nip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  regon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  legalForm: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankAccount: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  documents: z.lazy(() => DocumentListRelationFilterObjectSchema).optional(),
  invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional()
}).strict();
export const ClientWhereInputObjectSchema: z.ZodType<Prisma.ClientWhereInput> = clientwhereinputSchema as unknown as z.ZodType<Prisma.ClientWhereInput>;
export const ClientWhereInputObjectZodSchema = clientwhereinputSchema;
