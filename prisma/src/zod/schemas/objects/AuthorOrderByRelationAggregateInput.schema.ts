import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AuthorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AuthorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorOrderByRelationAggregateInput>;
export const AuthorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
