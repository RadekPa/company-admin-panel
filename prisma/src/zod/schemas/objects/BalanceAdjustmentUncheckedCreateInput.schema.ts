import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  amount: z.number(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BalanceAdjustmentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentUncheckedCreateInput>;
export const BalanceAdjustmentUncheckedCreateInputObjectZodSchema = makeSchema();
