import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorUpdateInputObjectSchema as AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema';
import { AuthorUncheckedUpdateInputObjectSchema as AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorUpdateOneSchema: z.ZodType<Prisma.AuthorUpdateArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), data: z.union([AuthorUpdateInputObjectSchema, AuthorUncheckedUpdateInputObjectSchema]), where: AuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthorUpdateArgs>;

export const AuthorUpdateOneZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), data: z.union([AuthorUpdateInputObjectSchema, AuthorUncheckedUpdateInputObjectSchema]), where: AuthorWhereUniqueInputObjectSchema }).strict();