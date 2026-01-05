import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorOrderByWithRelationInputObjectSchema as AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorCountAggregateInputObjectSchema as AuthorCountAggregateInputObjectSchema } from './objects/AuthorCountAggregateInput.schema';
import { AuthorMinAggregateInputObjectSchema as AuthorMinAggregateInputObjectSchema } from './objects/AuthorMinAggregateInput.schema';
import { AuthorMaxAggregateInputObjectSchema as AuthorMaxAggregateInputObjectSchema } from './objects/AuthorMaxAggregateInput.schema';
import { AuthorAvgAggregateInputObjectSchema as AuthorAvgAggregateInputObjectSchema } from './objects/AuthorAvgAggregateInput.schema';
import { AuthorSumAggregateInputObjectSchema as AuthorSumAggregateInputObjectSchema } from './objects/AuthorSumAggregateInput.schema';

export const AuthorAggregateSchema: z.ZodType<Prisma.AuthorAggregateArgs> = z.object({ orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AuthorCountAggregateInputObjectSchema ]).optional(), _min: AuthorMinAggregateInputObjectSchema.optional(), _max: AuthorMaxAggregateInputObjectSchema.optional(), _avg: AuthorAvgAggregateInputObjectSchema.optional(), _sum: AuthorSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthorAggregateArgs>;

export const AuthorAggregateZodSchema = z.object({ orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AuthorCountAggregateInputObjectSchema ]).optional(), _min: AuthorMinAggregateInputObjectSchema.optional(), _max: AuthorMaxAggregateInputObjectSchema.optional(), _avg: AuthorAvgAggregateInputObjectSchema.optional(), _sum: AuthorSumAggregateInputObjectSchema.optional() }).strict();