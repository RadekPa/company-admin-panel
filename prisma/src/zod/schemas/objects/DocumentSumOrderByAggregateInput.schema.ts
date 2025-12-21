import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const DocumentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentSumOrderByAggregateInput>;
export const DocumentSumOrderByAggregateInputObjectZodSchema = makeSchema();
