import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsCreateManyInputObjectSchema as RolePermissionsCreateManyInputObjectSchema } from './objects/RolePermissionsCreateManyInput.schema';

export const RolePermissionsCreateManyAndReturnSchema: z.ZodType<Prisma.RolePermissionsCreateManyAndReturnArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(), data: z.union([ RolePermissionsCreateManyInputObjectSchema, z.array(RolePermissionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsCreateManyAndReturnArgs>;

export const RolePermissionsCreateManyAndReturnZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(), data: z.union([ RolePermissionsCreateManyInputObjectSchema, z.array(RolePermissionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();