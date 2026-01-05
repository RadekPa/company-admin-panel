import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorOrderByWithRelationInputObjectSchema as AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorCountAggregateInputObjectSchema as AuthorCountAggregateInputObjectSchema } from './objects/AuthorCountAggregateInput.schema';

export const AuthorCountSchema: z.ZodType<Prisma.AuthorCountArgs> = z.object({ orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuthorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AuthorCountArgs>;

export const AuthorCountZodSchema = z.object({ orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuthorCountAggregateInputObjectSchema ]).optional() }).strict();