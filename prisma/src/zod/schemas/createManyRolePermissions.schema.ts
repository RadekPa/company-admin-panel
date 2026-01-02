import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsCreateManyInputObjectSchema as RolePermissionsCreateManyInputObjectSchema } from './objects/RolePermissionsCreateManyInput.schema';

export const RolePermissionsCreateManySchema: z.ZodType<Prisma.RolePermissionsCreateManyArgs> = z.object({ data: z.union([ RolePermissionsCreateManyInputObjectSchema, z.array(RolePermissionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsCreateManyArgs>;

export const RolePermissionsCreateManyZodSchema = z.object({ data: z.union([ RolePermissionsCreateManyInputObjectSchema, z.array(RolePermissionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();