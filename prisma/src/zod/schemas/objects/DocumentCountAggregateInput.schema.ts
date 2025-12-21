import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DocumentCountAggregateInputObjectSchema: z.ZodType<Prisma.DocumentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCountAggregateInputType>;
export const DocumentCountAggregateInputObjectZodSchema = makeSchema();
