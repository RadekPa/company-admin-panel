import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDocStatusWithAggregatesFilterObjectSchema as EnumDocStatusWithAggregatesFilterObjectSchema } from './EnumDocStatusWithAggregatesFilter.schema';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const documentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDocStatusWithAggregatesFilterObjectSchema), DocStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  clientId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const DocumentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DocumentScalarWhereWithAggregatesInput> = documentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DocumentScalarWhereWithAggregatesInput>;
export const DocumentScalarWhereWithAggregatesInputObjectZodSchema = documentscalarwherewithaggregatesinputSchema;
