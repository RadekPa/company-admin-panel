import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
  some: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
  none: z.lazy(() => AuthorWhereInputObjectSchema).optional()
}).strict();
export const AuthorListRelationFilterObjectSchema: z.ZodType<Prisma.AuthorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AuthorListRelationFilter>;
export const AuthorListRelationFilterObjectZodSchema = makeSchema();
