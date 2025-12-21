import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { NestedEnumDocStatusWithAggregatesFilterObjectSchema as NestedEnumDocStatusWithAggregatesFilterObjectSchema } from './NestedEnumDocStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDocStatusFilterObjectSchema as NestedEnumDocStatusFilterObjectSchema } from './NestedEnumDocStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DocStatusSchema.optional(),
  in: DocStatusSchema.array().optional(),
  notIn: DocStatusSchema.array().optional(),
  not: z.union([DocStatusSchema, z.lazy(() => NestedEnumDocStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDocStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDocStatusFilterObjectSchema).optional()
}).strict();
export const EnumDocStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDocStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDocStatusWithAggregatesFilter>;
export const EnumDocStatusWithAggregatesFilterObjectZodSchema = makeSchema();
