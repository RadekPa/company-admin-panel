import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const RolePermissionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RolePermissionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsSumOrderByAggregateInput>;
export const RolePermissionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
