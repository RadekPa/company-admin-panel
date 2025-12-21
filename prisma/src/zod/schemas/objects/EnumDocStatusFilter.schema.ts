import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema';
import { NestedEnumDocStatusFilterObjectSchema as NestedEnumDocStatusFilterObjectSchema } from './NestedEnumDocStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DocStatusSchema.optional(),
  in: DocStatusSchema.array().optional(),
  notIn: DocStatusSchema.array().optional(),
  not: z.union([DocStatusSchema, z.lazy(() => NestedEnumDocStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumDocStatusFilterObjectSchema: z.ZodType<Prisma.EnumDocStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDocStatusFilter>;
export const EnumDocStatusFilterObjectZodSchema = makeSchema();
