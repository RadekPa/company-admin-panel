import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorDeleteOneSchema: z.ZodType<Prisma.AuthorDeleteArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthorDeleteArgs>;

export const AuthorDeleteOneZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema }).strict();