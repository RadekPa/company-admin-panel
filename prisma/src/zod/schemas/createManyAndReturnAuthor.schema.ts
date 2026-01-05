import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorCreateManyInputObjectSchema as AuthorCreateManyInputObjectSchema } from './objects/AuthorCreateManyInput.schema';

export const AuthorCreateManyAndReturnSchema: z.ZodType<Prisma.AuthorCreateManyAndReturnArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), data: z.union([ AuthorCreateManyInputObjectSchema, z.array(AuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuthorCreateManyAndReturnArgs>;

export const AuthorCreateManyAndReturnZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), data: z.union([ AuthorCreateManyInputObjectSchema, z.array(AuthorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();