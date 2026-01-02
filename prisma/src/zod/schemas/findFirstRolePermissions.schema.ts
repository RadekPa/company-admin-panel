import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsOrderByWithRelationInputObjectSchema as RolePermissionsOrderByWithRelationInputObjectSchema } from './objects/RolePermissionsOrderByWithRelationInput.schema';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';
import { RolePermissionsScalarFieldEnumSchema } from './enums/RolePermissionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RolePermissionsFindFirstSelectSchema: z.ZodType<Prisma.RolePermissionsSelect> = z.object({
    id: z.boolean().optional(),
    module: z.boolean().optional(),
    userAccess: z.boolean().optional(),
    advancedAccess: z.boolean().optional(),
    adminAccess: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RolePermissionsSelect>;

export const RolePermissionsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    module: z.boolean().optional(),
    userAccess: z.boolean().optional(),
    advancedAccess: z.boolean().optional(),
    adminAccess: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const RolePermissionsFindFirstSchema: z.ZodType<Prisma.RolePermissionsFindFirstArgs> = z.object({ select: RolePermissionsFindFirstSelectSchema.optional(),  orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolePermissionsScalarFieldEnumSchema, RolePermissionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsFindFirstArgs>;

export const RolePermissionsFindFirstZodSchema = z.object({ select: RolePermissionsFindFirstSelectSchema.optional(),  orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolePermissionsScalarFieldEnumSchema, RolePermissionsScalarFieldEnumSchema.array()]).optional() }).strict();