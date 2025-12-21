import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDocStatusFilterObjectSchema as EnumDocStatusFilterObjectSchema } from './EnumDocStatusFilter.schema';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const documentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DocumentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDocStatusFilterObjectSchema), DocStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  clientId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const DocumentScalarWhereInputObjectSchema: z.ZodType<Prisma.DocumentScalarWhereInput> = documentscalarwhereinputSchema as unknown as z.ZodType<Prisma.DocumentScalarWhereInput>;
export const DocumentScalarWhereInputObjectZodSchema = documentscalarwhereinputSchema;
