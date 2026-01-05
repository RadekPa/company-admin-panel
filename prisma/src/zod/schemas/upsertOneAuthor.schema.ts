import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorCreateInputObjectSchema as AuthorCreateInputObjectSchema } from './objects/AuthorCreateInput.schema';
import { AuthorUncheckedCreateInputObjectSchema as AuthorUncheckedCreateInputObjectSchema } from './objects/AuthorUncheckedCreateInput.schema';
import { AuthorUpdateInputObjectSchema as AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema';
import { AuthorUncheckedUpdateInputObjectSchema as AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema';

export const AuthorUpsertOneSchema: z.ZodType<Prisma.AuthorUpsertArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema, create: z.union([ AuthorCreateInputObjectSchema, AuthorUncheckedCreateInputObjectSchema ]), update: z.union([ AuthorUpdateInputObjectSchema, AuthorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AuthorUpsertArgs>;

export const AuthorUpsertOneZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema, create: z.union([ AuthorCreateInputObjectSchema, AuthorUncheckedCreateInputObjectSchema ]), update: z.union([ AuthorUpdateInputObjectSchema, AuthorUncheckedUpdateInputObjectSchema ]) }).strict();