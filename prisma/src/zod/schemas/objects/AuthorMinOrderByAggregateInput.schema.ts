import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  workEmail: SortOrderSchema.optional(),
  personalEmail: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AuthorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuthorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorMinOrderByAggregateInput>;
export const AuthorMinOrderByAggregateInputObjectZodSchema = makeSchema();
