import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentUpdateManyMutationInputObjectSchema as BalanceAdjustmentUpdateManyMutationInputObjectSchema } from './objects/BalanceAdjustmentUpdateManyMutationInput.schema';
import { BalanceAdjustmentWhereInputObjectSchema as BalanceAdjustmentWhereInputObjectSchema } from './objects/BalanceAdjustmentWhereInput.schema';

export const BalanceAdjustmentUpdateManySchema: z.ZodType<Prisma.BalanceAdjustmentUpdateManyArgs> = z.object({ data: BalanceAdjustmentUpdateManyMutationInputObjectSchema, where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentUpdateManyArgs>;

export const BalanceAdjustmentUpdateManyZodSchema = z.object({ data: BalanceAdjustmentUpdateManyMutationInputObjectSchema, where: BalanceAdjustmentWhereInputObjectSchema.optional() }).strict();