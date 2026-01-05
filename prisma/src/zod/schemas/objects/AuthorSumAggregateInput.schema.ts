import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const AuthorSumAggregateInputObjectSchema: z.ZodType<Prisma.AuthorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthorSumAggregateInputType>;
export const AuthorSumAggregateInputObjectZodSchema = makeSchema();
