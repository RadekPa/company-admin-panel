import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentUpdateInputObjectSchema as BalanceAdjustmentUpdateInputObjectSchema } from './objects/BalanceAdjustmentUpdateInput.schema';
import { BalanceAdjustmentUncheckedUpdateInputObjectSchema as BalanceAdjustmentUncheckedUpdateInputObjectSchema } from './objects/BalanceAdjustmentUncheckedUpdateInput.schema';
import { BalanceAdjustmentWhereUniqueInputObjectSchema as BalanceAdjustmentWhereUniqueInputObjectSchema } from './objects/BalanceAdjustmentWhereUniqueInput.schema';

export const BalanceAdjustmentUpdateOneSchema: z.ZodType<Prisma.BalanceAdjustmentUpdateArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  data: z.union([BalanceAdjustmentUpdateInputObjectSchema, BalanceAdjustmentUncheckedUpdateInputObjectSchema]), where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentUpdateArgs>;

export const BalanceAdjustmentUpdateOneZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  data: z.union([BalanceAdjustmentUpdateInputObjectSchema, BalanceAdjustmentUncheckedUpdateInputObjectSchema]), where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict();