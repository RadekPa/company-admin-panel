import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const BalanceAdjustmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BalanceAdjustmentWhereUniqueInput>;
export const BalanceAdjustmentWhereUniqueInputObjectZodSchema = makeSchema();
