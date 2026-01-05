import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema';
import { AuthorOrderByWithRelationInputObjectSchema as AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorScalarFieldEnumSchema } from './enums/AuthorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AuthorSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    description: z.boolean().optional(),
    workEmail: z.boolean().optional(),
    personalEmail: z.boolean().optional(),
    photos: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuthorSelect>;

export const AuthorFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    description: z.boolean().optional(),
    workEmail: z.boolean().optional(),
    personalEmail: z.boolean().optional(),
    photos: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AuthorFindFirstOrThrowSchema: z.ZodType<Prisma.AuthorFindFirstOrThrowArgs> = z.object({ select: AuthorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AuthorIncludeObjectSchema.optional()), orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthorScalarFieldEnumSchema, AuthorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuthorFindFirstOrThrowArgs>;

export const AuthorFindFirstOrThrowZodSchema = z.object({ select: AuthorFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AuthorIncludeObjectSchema.optional()), orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthorScalarFieldEnumSchema, AuthorScalarFieldEnumSchema.array()]).optional() }).strict();