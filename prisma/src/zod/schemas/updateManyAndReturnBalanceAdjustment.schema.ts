import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentUpdateManyMutationInputObjectSchema as BalanceAdjustmentUpdateManyMutationInputObjectSchema } from './objects/BalanceAdjustmentUpdateManyMutationInput.schema';
import { BalanceAdjustmentWhereInputObjectSchema as BalanceAdjustmentWhereInputObjectSchema } from './objects/BalanceAdjustmentWhereInput.schema';

export const BalanceAdjustmentUpdateManyAndReturnSchema: z.ZodType<Prisma.BalanceAdjustmentUpdateManyAndReturnArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(), data: BalanceAdjustmentUpdateManyMutationInputObjectSchema, where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentUpdateManyAndReturnArgs>;

export const BalanceAdjustmentUpdateManyAndReturnZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(), data: BalanceAdjustmentUpdateManyMutationInputObjectSchema, where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict();