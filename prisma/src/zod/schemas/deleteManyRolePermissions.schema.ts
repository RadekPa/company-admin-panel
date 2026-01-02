import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';

export const RolePermissionsDeleteManySchema: z.ZodType<Prisma.RolePermissionsDeleteManyArgs> = z.object({ where: RolePermissionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsDeleteManyArgs>;

export const RolePermissionsDeleteManyZodSchema = z.object({ where: RolePermissionsWhereInputObjectSchema.optional() }).strict();