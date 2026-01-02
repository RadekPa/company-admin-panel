import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './objects/BalanceAdjustmentSelect.schema';
import { BalanceAdjustmentWhereUniqueInputObjectSchema as BalanceAdjustmentWhereUniqueInputObjectSchema } from './objects/BalanceAdjustmentWhereUniqueInput.schema';
import { BalanceAdjustmentCreateInputObjectSchema as BalanceAdjustmentCreateInputObjectSchema } from './objects/BalanceAdjustmentCreateInput.schema';
import { BalanceAdjustmentUncheckedCreateInputObjectSchema as BalanceAdjustmentUncheckedCreateInputObjectSchema } from './objects/BalanceAdjustmentUncheckedCreateInput.schema';
import { BalanceAdjustmentUpdateInputObjectSchema as BalanceAdjustmentUpdateInputObjectSchema } from './objects/BalanceAdjustmentUpdateInput.schema';
import { BalanceAdjustmentUncheckedUpdateInputObjectSchema as BalanceAdjustmentUncheckedUpdateInputObjectSchema } from './objects/BalanceAdjustmentUncheckedUpdateInput.schema';

export const BalanceAdjustmentUpsertOneSchema: z.ZodType<Prisma.BalanceAdjustmentUpsertArgs> = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema, create: z.union([ BalanceAdjustmentCreateInputObjectSchema, BalanceAdjustmentUncheckedCreateInputObjectSchema ]), update: z.union([ BalanceAdjustmentUpdateInputObjectSchema, BalanceAdjustmentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BalanceAdjustmentUpsertArgs>;

export const BalanceAdjustmentUpsertOneZodSchema = z.object({ select: BalanceAdjustmentSelectObjectSchema.optional(),  where: BalanceAdjustmentWhereUniqueInputObjectSchema, create: z.union([ BalanceAdjustmentCreateInputObjectSchema, BalanceAdjustmentUncheckedCreateInputObjectSchema ]), update: z.union([ BalanceAdjustmentUpdateInputObjectSchema, BalanceAdjustmentUncheckedUpdateInputObjectSchema ]) }).strict();