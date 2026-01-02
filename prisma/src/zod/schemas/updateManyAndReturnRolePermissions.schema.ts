import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsSelectObjectSchema as RolePermissionsSelectObjectSchema } from './objects/RolePermissionsSelect.schema';
import { RolePermissionsUpdateManyMutationInputObjectSchema as RolePermissionsUpdateManyMutationInputObjectSchema } from './objects/RolePermissionsUpdateManyMutationInput.schema';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';

export const RolePermissionsUpdateManyAndReturnSchema: z.ZodType<Prisma.RolePermissionsUpdateManyAndReturnArgs> = z.object({ select: RolePermissionsSelectObjectSchema.optional(), data: RolePermissionsUpdateManyMutationInputObjectSchema, where: RolePermissionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsUpdateManyAndReturnArgs>;

export const RolePermissionsUpdateManyAndReturnZodSchema = z.object({ select: RolePermissionsSelectObjectSchema.optional(), data: RolePermissionsUpdateManyMutationInputObjectSchema, where: RolePermissionsWhereInputObjectSchema.optional() }).strict();