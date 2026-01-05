import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthorWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountAuthorsArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountAuthorsArgsObjectZodSchema = makeSchema();
