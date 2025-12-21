import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const DocumentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentAvgOrderByAggregateInput>;
export const DocumentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
