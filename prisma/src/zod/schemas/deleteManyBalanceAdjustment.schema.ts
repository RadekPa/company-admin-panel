import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentWhereInputObjectSchema as BalanceAdjustmentWhereInputObjectSchema } from './objects/BalanceAdjustmentWhereInput.schema';

export const BalanceAdjustmentDeleteManySchema: z.ZodType<Prisma.BalanceAdjustmentDeleteManyArgs> = z.object({ where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentDeleteManyArgs>;

export const BalanceAdjustmentDeleteManyZodSchema = z.object({ where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict();