import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const RolePermissionsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RolePermissionsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsAvgOrderByAggregateInput>;
export const RolePermissionsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
