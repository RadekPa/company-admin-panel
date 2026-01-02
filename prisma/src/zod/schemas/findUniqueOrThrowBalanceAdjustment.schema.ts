import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentWhereUniqueInputObjectSchema as BalanceAdjustmentWhereUniqueInputObjectSchema } from './objects/BalanceAdjustmentWhereUniqueInput.schema';

export const BalanceAdjustmentFindUniqueOrThrowSchema: z.ZodType<Prisma.BalanceAdjustmentFindUniqueOrThrowArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentFindUniqueOrThrowArgs>;

export const BalanceAdjustmentFindUniqueOrThrowZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema }).strict();