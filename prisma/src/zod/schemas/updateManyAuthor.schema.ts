import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorUpdateManyMutationInputObjectSchema as AuthorUpdateManyMutationInputObjectSchema } from './objects/AuthorUpdateManyMutationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';

export const AuthorUpdateManySchema: z.ZodType<Prisma.AuthorUpdateManyArgs> = z.object({ data: AuthorUpdateManyMutationInputObjectSchema, where: AuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthorUpdateManyArgs>;

export const AuthorUpdateManyZodSchema = z.object({ data: AuthorUpdateManyMutationInputObjectSchema, where: AuthorWhereInputObjectSchema.optional() }).strict();