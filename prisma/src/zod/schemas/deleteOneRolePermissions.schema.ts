import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';

export const RolePermissionsDeleteOneSchema: z.ZodType<Prisma.RolePermissionsDeleteArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RolePermissionsDeleteArgs>;

export const RolePermissionsDeleteOneZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema }).strict();