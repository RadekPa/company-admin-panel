import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const DocumentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentMaxOrderByAggregateInput>;
export const DocumentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
