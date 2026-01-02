import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentCreateInputObjectSchema as BalanceAdjustmentCreateInputObjectSchema } from './objects/BalanceAdjustmentCreateInput.schema';
import { BalanceAdjustmentUncheckedCreateInputObjectSchema as BalanceAdjustmentUncheckedCreateInputObjectSchema } from './objects/BalanceAdjustmentUncheckedCreateInput.schema';

export const BalanceAdjustmentCreateOneSchema: z.ZodType<Prisma.BalanceAdjustmentCreateArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  data: z.union([BalanceAdjustmentCreateInputObjectSchema, BalanceAdjustmentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentCreateArgs>;

export const BalanceAdjustmentCreateOneZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  data: z.union([BalanceAdjustmentCreateInputObjectSchema, BalanceAdjustmentUncheckedCreateInputObjectSchema]) }).strict();