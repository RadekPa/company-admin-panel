import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const AuthorWhereUniqueInputObjectSchema: z.ZodType<Prisma.AuthorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorWhereUniqueInput>;
export const AuthorWhereUniqueInputObjectZodSchema = makeSchema();
