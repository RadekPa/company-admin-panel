import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsCreateInputObjectSchema as RolePermissionsCreateInputObjectSchema } from './objects/RolePermissionsCreateInput.schema';
import { RolePermissionsUncheckedCreateInputObjectSchema as RolePermissionsUncheckedCreateInputObjectSchema } from './objects/RolePermissionsUncheckedCreateInput.schema';

export const RolePermissionsCreateOneSchema: z.ZodType<Prisma.RolePermissionsCreateArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  data: z.union([RolePermissionsCreateInputObjectSchema, RolePermissionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RolePermissionsCreateArgs>;

export const RolePermissionsCreateOneZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  data: z.union([RolePermissionsCreateInputObjectSchema, RolePermissionsUncheckedCreateInputObjectSchema]) }).strict();