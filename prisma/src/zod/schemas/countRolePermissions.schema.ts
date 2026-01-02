import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RolePermissionsOrderByWithRelationInputObjectSchema as RolePermissionsOrderByWithRelationInputObjectSchema } from './objects/RolePermissionsOrderByWithRelationInput.schema';
import { RolePermissionsWhereInputObjectSchema as RolePermissionsWhereInputObjectSchema } from './objects/RolePermissionsWhereInput.schema';
import { RolePermissionsWhereUniqueInputObjectSchema as RolePermissionsWhereUniqueInputObjectSchema } from './objects/RolePermissionsWhereUniqueInput.schema';
import { RolePermissionsCountAggregateInputObjectSchema as RolePermissionsCountAggregateInputObjectSchema } from './objects/RolePermissionsCountAggregateInput.schema';

export const RolePermissionsCountSchema: z.ZodType<Prisma.RolePermissionsCountArgs> = z.object({ orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RolePermissionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RolePermissionsCountArgs>;

export const RolePermissionsCountZodSchema = z.object({ orderBy: z.union([RolePermissionsOrderByWithRelationInputObjectSchema, RolePermissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RolePermissionsWhereInputObjectSchema.optional(), cursor: RolePermissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RolePermissionsCountAggregateInputObjectSchema ]).optional() }).strict();