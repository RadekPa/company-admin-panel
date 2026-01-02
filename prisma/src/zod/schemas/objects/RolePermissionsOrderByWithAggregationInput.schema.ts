import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RolePermissionsCountOrderByAggregateInputObjectSchema as RolePermissionsCountOrderByAggregateInputObjectSchema } from './RolePermissionsCountOrderByAggregateInput.schema';
import { RolePermissionsAvgOrderByAggregateInputObjectSchema as RolePermissionsAvgOrderByAggregateInputObjectSchema } from './RolePermissionsAvgOrderByAggregateInput.schema';
import { RolePermissionsMaxOrderByAggregateInputObjectSchema as RolePermissionsMaxOrderByAggregateInputObjectSchema } from './RolePermissionsMaxOrderByAggregateInput.schema';
import { RolePermissionsMinOrderByAggregateInputObjectSchema as RolePermissionsMinOrderByAggregateInputObjectSchema } from './RolePermissionsMinOrderByAggregateInput.schema';
import { RolePermissionsSumOrderByAggregateInputObjectSchema as RolePermissionsSumOrderByAggregateInputObjectSchema } from './RolePermissionsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  module: SortOrderSchema.optional(),
  userAccess: SortOrderSchema.optional(),
  advancedAccess: SortOrderSchema.optional(),
  adminAccess: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RolePermissionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RolePermissionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RolePermissionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RolePermissionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RolePermissionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RolePermissionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RolePermissionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsOrderByWithAggregationInput>;
export const RolePermissionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
