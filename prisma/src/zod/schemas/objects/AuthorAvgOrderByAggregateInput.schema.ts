import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const AuthorAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthorAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorAvgOrderByAggregateInput>;
export const AuthorAvgOrderByAggregateInputObjectZodSchema = makeSchema();
