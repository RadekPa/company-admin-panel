import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const balanceadjustmentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  amount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BalanceAdjustmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BalanceAdjustmentScalarWhereWithAggregatesInput> = balanceadjustmentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BalanceAdjustmentScalarWhereWithAggregatesInput>;
export const BalanceAdjustmentScalarWhereWithAggregatesInputObjectZodSchema = balanceadjustmentscalarwherewithaggregatesinputSchema;
