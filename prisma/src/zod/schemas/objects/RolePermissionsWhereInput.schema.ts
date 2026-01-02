import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const rolepermissionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RolePermissionsWhereInputObjectSchema), z.lazy(() => RolePermissionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RolePermissionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RolePermissionsWhereInputObjectSchema), z.lazy(() => RolePermissionsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  module: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userAccess: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  advancedAccess: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  adminAccess: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RolePermissionsWhereInputObjectSchema: z.ZodType<Prisma.RolePermissionsWhereInput> = rolepermissionswhereinputSchema as unknown as z.ZodType<Prisma.RolePermissionsWhereInput>;
export const RolePermissionsWhereInputObjectZodSchema = rolepermissionswhereinputSchema;
