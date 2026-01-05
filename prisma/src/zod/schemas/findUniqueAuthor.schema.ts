import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';

export const AuthorFindUniqueSchema: z.ZodType<Prisma.AuthorFindUniqueArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthorFindUniqueArgs>;

export const AuthorFindUniqueZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), where: AuthorWhereUniqueInputObjectSchema }).strict();