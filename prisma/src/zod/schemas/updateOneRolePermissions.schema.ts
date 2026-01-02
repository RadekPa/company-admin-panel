import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsUpdateInputObjectSchema as RolePermissionsUpdateInputObjectSchema } from './objects/RolePermissionsUpdateInput.schema';
import { RolePermissionsUncheckedUpdateInputObjectSchema as RolePermissionsUncheckedUpdateInputObjectSchema } from './objects/RolePermissionsUncheckedUpdateInput.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';

export const RolePermissionsUpdateOneSchema: z.ZodType<Prisma.RolePermissionsUpdateArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  data: z.union([RolePermissionsUpdateInputObjectSchema, RolePermissionsUncheckedUpdateInputObjectSchema]), where: RolePermissionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RolePermissionsUpdateArgs>;

export const RolePermissionsUpdateOneZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  data: z.union([RolePermissionsUpdateInputObjectSchema, RolePermissionsUncheckedUpdateInputObjectSchema]), where: RolePermissionsWhereUniqueInputObjectSchema }).strict();