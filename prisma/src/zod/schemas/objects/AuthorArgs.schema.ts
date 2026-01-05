import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './AuthorSelect.schema';
import { AuthorIncludeObjectSchema as AuthorIncludeObjectSchema } from './AuthorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuthorSelectObjectSchema).optional(),
  include: z.lazy(() => AuthorIncludeObjectSchema).optional()
}).strict();
export const AuthorArgsObjectSchema = makeSchema();
export const AuthorArgsObjectZodSchema = makeSchema();
