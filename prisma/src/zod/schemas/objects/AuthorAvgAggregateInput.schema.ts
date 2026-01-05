import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const AuthorAvgAggregateInputObjectSchema: z.ZodType<Prisma.AuthorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthorAvgAggregateInputType>;
export const AuthorAvgAggregateInputObjectZodSchema = makeSchema();
