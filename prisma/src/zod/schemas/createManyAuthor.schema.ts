import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorCreateManyInputObjectSchema as AuthorCreateManyInputObjectSchema } from './objects/AuthorCreateManyInput.schema';

export const AuthorCreateManySchema: z.ZodType<Prisma.AuthorCreateManyArgs> = z.object({ data: z.union([ AuthorCreateManyInputObjectSchema, z.array(AuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuthorCreateManyArgs>;

export const AuthorCreateManyZodSchema = z.object({ data: z.union([ AuthorCreateManyInputObjectSchema, z.array(AuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();