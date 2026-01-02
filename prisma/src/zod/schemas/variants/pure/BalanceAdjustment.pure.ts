import * as z from 'zod';
// prettier-ignore
export const BalanceAdjustmentModelSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    amount: z.number(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BalanceAdjustmentPureType = z.infer<typeof BalanceAdjustmentModelSchema>;
