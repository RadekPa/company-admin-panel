import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { ClientScalarRelationFilterObjectSchema as ClientScalarRelationFilterObjectSchema } from './ClientScalarRelationFilter.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const invoicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvoiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvoiceWhereInputObjectSchema), z.lazy(() => InvoiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  issueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  paymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  net: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  vatPerc: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  vat: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  gross: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  client: z.union([z.lazy(() => ClientScalarRelationFilterObjectSchema), z.lazy(() => ClientWhereInputObjectSchema)]).optional()
}).strict();
export const InvoiceWhereInputObjectSchema: z.ZodType<Prisma.InvoiceWhereInput> = invoicewhereinputSchema as unknown as z.ZodType<Prisma.InvoiceWhereInput>;
export const InvoiceWhereInputObjectZodSchema = invoicewhereinputSchema;
