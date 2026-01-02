import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const balanceadjustmentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BalanceAdjustmentWhereInputObjectSchema), z.lazy(() => BalanceAdjustmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BalanceAdjustmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BalanceAdjustmentWhereInputObjectSchema), z.lazy(() => BalanceAdjustmentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BalanceAdjustmentWhereInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentWhereInput> = balanceadjustmentwhereinputSchema as unknown as z.ZodType<Prisma.BalanceAdjustmentWhereInput>;
export const BalanceAdjustmentWhereInputObjectZodSchema = balanceadjustmentwhereinputSchema;
