import * as z from 'zod';

export const BalanceAdjustmentScalarFieldEnumSchema = z.enum(['id', 'date', 'amount', 'description', 'createdAt', 'updatedAt'])

export type BalanceAdjustmentScalarFieldEnum = z.infer<typeof BalanceAdjustmentScalarFieldEnumSchema>;