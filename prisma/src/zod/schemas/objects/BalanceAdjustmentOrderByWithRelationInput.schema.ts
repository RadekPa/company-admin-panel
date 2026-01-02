import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BalanceAdjustmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentOrderByWithRelationInput>;
export const BalanceAdjustmentOrderByWithRelationInputObjectZodSchema = makeSchema();
