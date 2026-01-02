import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsUpdateManyMutationInputObjectSchema as RolePermissionsUpdateManyMutationInputObjectSchema } from './objects/RolePermissionsUpdateManyMutationInput.schema';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';

export const RolePermissionsUpdateManySchema: z.ZodType<Prisma.RolePermissionsUpdateManyArgs> = z.object({ data: RolePermissionsUpdateManyMutationInputObjectSchema, where: RolePermissionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsUpdateManyArgs>;

export const RolePermissionsUpdateManyZodSchema = z.object({ data: RolePermissionsUpdateManyMutationInputObjectSchema, where: RolePermissionsWhereInputObjectSchema.optional() }).strict();