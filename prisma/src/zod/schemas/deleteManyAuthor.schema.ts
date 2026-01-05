import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';

export const AuthorDeleteManySchema: z.ZodType<Prisma.AuthorDeleteManyArgs> = z.object({ where: AuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthorDeleteManyArgs>;

export const AuthorDeleteManyZodSchema = z.object({ where: AuthorWhereInputObjectSchema.optional() }).strict();