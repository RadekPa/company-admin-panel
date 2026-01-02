import * as z from 'zod';
// prettier-ignore
export const BalanceAdjustmentResultSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    amount: z.number(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BalanceAdjustmentResultType = z.infer<typeof BalanceAdjustmentResultSchema>;
