import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorUpdateManyMutationInputObjectSchema as AuthorUpdateManyMutationInputObjectSchema } from './objects/AuthorUpdateManyMutationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';

export const AuthorUpdateManyAndReturnSchema: z.ZodType<Prisma.AuthorUpdateManyAndReturnArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), data: AuthorUpdateManyMutationInputObjectSchema, where: AuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthorUpdateManyAndReturnArgs>;

export const AuthorUpdateManyAndReturnZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), data: AuthorUpdateManyMutationInputObjectSchema, where: AuthorWhereInputObjectSchema.optional() }).strict();