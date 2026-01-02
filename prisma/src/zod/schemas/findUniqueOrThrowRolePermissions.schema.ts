import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';

export const RolePermissionsFindUniqueOrThrowSchema: z.ZodType<Prisma.RolePermissionsFindUniqueOrThrowArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RolePermissionsFindUniqueOrThrowArgs>;

export const RolePermissionsFindUniqueOrThrowZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema }).strict();