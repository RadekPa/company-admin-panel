import * as z from 'zod';
export const BalanceAdjustmentFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  date: z.date(),
  amount: z.number(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));