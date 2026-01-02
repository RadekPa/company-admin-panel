import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentWhereUniqueInputObjectSchema as BalanceAdjustmentWhereUniqueInputObjectSchema } from './objects/BalanceAdjustmentWhereUniqueInput.schema';

export const BalanceAdjustmentFindUniqueSchema: z.ZodType<Prisma.BalanceAdjustmentFindUniqueArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentFindUniqueArgs>;

export const BalanceAdjustmentFindUniqueZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict();