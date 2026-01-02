import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const rolepermissionsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RolePermissionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RolePermissionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RolePermissionsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RolePermissionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RolePermissionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  module: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userAccess: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  advancedAccess: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  adminAccess: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RolePermissionsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RolePermissionsScalarWhereWithAggregatesInput> = rolepermissionsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RolePermissionsScalarWhereWithAggregatesInput>;
export const RolePermissionsScalarWhereWithAggregatesInputObjectZodSchema = rolepermissionsscalarwherewithaggregatesinputSchema;
