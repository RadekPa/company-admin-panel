import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  amount: z.number(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BalanceAdjustmentCreateManyInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentCreateManyInput>;
export const BalanceAdjustmentCreateManyInputObjectZodSchema = makeSchema();
