import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BalanceAdjustmentSelectObjectSchema as BalanceAdjustmentSelectObjectSchema } from './BalanceAdjustmentSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BalanceAdjustmentSelectObjectSchema).optional()
}).strict();
export const BalanceAdjustmentArgsObjectSchema = makeSchema();
export const BalanceAdjustmentArgsObjectZodSchema = makeSchema();
