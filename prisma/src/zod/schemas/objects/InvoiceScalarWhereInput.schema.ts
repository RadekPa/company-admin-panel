import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const invoicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InvoiceScalarWhereInputObjectSchema), z.lazy(() => InvoiceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvoiceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvoiceScalarWhereInputObjectSchema), z.lazy(() => InvoiceScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InvoiceScalarWhereInputObjectSchema: z.ZodType<Prisma.InvoiceScalarWhereInput> = invoicescalarwhereinputSchema as unknown as z.ZodType<Prisma.InvoiceScalarWhereInput>;
export const InvoiceScalarWhereInputObjectZodSchema = invoicescalarwhereinputSchema;
