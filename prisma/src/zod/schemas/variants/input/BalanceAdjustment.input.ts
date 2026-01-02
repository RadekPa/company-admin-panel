import * as z from 'zod';
// prettier-ignore
export const BalanceAdjustmentInputSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    amount: z.number(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BalanceAdjustmentInputType = z.infer<typeof BalanceAdjustmentInputSchema>;
