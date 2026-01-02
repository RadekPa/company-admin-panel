import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  date: z.coerce.date(),
  amount: z.number(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BalanceAdjustmentCreateInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentCreateInput>;
export const BalanceAdjustmentCreateInputObjectZodSchema = makeSchema();
