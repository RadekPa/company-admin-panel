import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClientCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOrderByAggregateInput>;
export const ClientCountOrderByAggregateInputObjectZodSchema = makeSchema();
