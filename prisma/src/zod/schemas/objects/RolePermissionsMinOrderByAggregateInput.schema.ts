import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  module: SortOrderSchema.optional(),
  userAccess: SortOrderSchema.optional(),
  advancedAccess: SortOrderSchema.optional(),
  adminAccess: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RolePermissionsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RolePermissionsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsMinOrderByAggregateInput>;
export const RolePermissionsMinOrderByAggregateInputObjectZodSchema = makeSchema();
