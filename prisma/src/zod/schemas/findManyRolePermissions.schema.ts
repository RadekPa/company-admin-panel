import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsOrderByWithRelationInputObjectSchema as RolePermissionsOrderByWithRelationInputObjectSchema } from './objects/RolePermissionsOrderByWithRelationInput.schema';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';
import { RolePermissionsScalarFieldEnumSchema } from './enums/RolePermissionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RolePermissionsFindManySelectSchema: z.ZodType<Prisma.RolePermissionsSelect> = z.object({
    id: z.boolean().optional(),
    module: z.boolean().optional(),
    userAccess: z.boolean().optional(),
    advancedAccess: z.boolean().optional(),
    adminAccess: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RolePermissionsSelect>;

export const RolePermissionsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    module: z.boolean().optional(),
    userAccess: z.boolean().optional(),
    advancedAccess: z.boolean().optional(),
    adminAccess: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const RolePermissionsFindManySchema: z.ZodType<Prisma.RolePermissionsFindManyArgs> = z.object({ select: RolePermissionsFindManySelectSchema.optional(),  orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolePermissionsScalarFieldEnumSchema, RolePermissionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsFindManyArgs>;

export const RolePermissionsFindManyZodSchema = z.object({ select: RolePermissionsFindManySelectSchema.optional(),  orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RolePermissionsScalarFieldEnumSchema, RolePermissionsScalarFieldEnumSchema.array()]).optional() }).strict();