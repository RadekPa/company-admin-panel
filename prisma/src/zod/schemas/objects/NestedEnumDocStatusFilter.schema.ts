import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocStatusSchema } from '../enums/DocStatus.schema'

const nestedenumdocstatusfilterSchema = z.object({
  equals: DocStatusSchema.optional(),
  in: DocStatusSchema.array().optional(),
  notIn: DocStatusSchema.array().optional(),
  not: z.union([DocStatusSchema, z.lazy(() => NestedEnumDocStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDocStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumDocStatusFilter> = nestedenumdocstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDocStatusFilter>;
export const NestedEnumDocStatusFilterObjectZodSchema = nestedenumdocstatusfilterSchema;
