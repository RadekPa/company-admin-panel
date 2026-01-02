import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  amount: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const BalanceAdjustmentSelectObjectSchema: z.ZodType<Prisma.BalanceAdjustmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentSelect>;
export const BalanceAdjustmentSelectObjectZodSchema = makeSchema();
