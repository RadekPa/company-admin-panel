import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './objects/AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorCreateInputObjectSchema as AuthorCreateInputObjectSchema } from './objects/AuthorCreateInput.schema';
import { AuthorUncheckedCreateInputObjectSchema as AuthorUncheckedCreateInputObjectSchema } from './objects/AuthorUncheckedCreateInput.schema';

export const AuthorCreateOneSchema: z.ZodType<Prisma.AuthorCreateArgs> = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), data: z.union([AuthorCreateInputObjectSchema, AuthorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AuthorCreateArgs>;

export const AuthorCreateOneZodSchema = z.object({ select: AuthorSelectObjectSchema.optional(), include: AuthorIncludeObjectSchema.optional(), data: z.union([AuthorCreateInputObjectSchema, AuthorUncheckedCreateInputObjectSchema]) }).strict();