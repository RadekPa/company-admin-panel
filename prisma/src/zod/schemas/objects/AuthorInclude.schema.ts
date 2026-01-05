import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema'

const makeSchema = () => z.object({
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional()
}).strict();
export const AuthorIncludeObjectSchema: z.ZodType<Prisma.AuthorInclude> = makeSchema() as unknown as z.ZodType<Prisma.AuthorInclude>;
export const AuthorIncludeObjectZodSchema = makeSchema();
