import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';
import { RolePermissionsCreateInputObjectSchema as RolePermissionsCreateInputObjectSchema } from './objects/RolePermissionsCreateInput.schema';
import { RolePermissionsUncheckedCreateInputObjectSchema as RolePermissionsUncheckedCreateInputObjectSchema } from './objects/RolePermissionsUncheckedCreateInput.schema';
import { RolePermissionsUpdateInputObjectSchema as RolePermissionsUpdateInputObjectSchema } from './objects/RolePermissionsUpdateInput.schema';
import { RolePermissionsUncheckedUpdateInputObjectSchema as RolePermissionsUncheckedUpdateInputObjectSchema } from './objects/RolePermissionsUncheckedUpdateInput.schema';

export const RolePermissionsUpsertOneSchema: z.ZodType<Prisma.RolePermissionsUpsertArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema, create: z.union([ RolePermissionsCreateInputObjectSchema, RolePermissionsUncheckedCreateInputObjectSchema ]), update: z.union([ RolePermissionsUpdateInputObjectSchema, RolePermissionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RolePermissionsUpsertArgs>;

export const RolePermissionsUpsertOneZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(),  where: RolePermissionsWhereUniqueInputObjectSchema, create: z.union([ RolePermissionsCreateInputObjectSchema, RolePermissionsUncheckedCreateInputObjectSchema ]), update: z.union([ RolePermissionsUpdateInputObjectSchema, RolePermissionsUncheckedUpdateInputObjectSchema ]) }).strict();