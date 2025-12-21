import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const DocumentAvgAggregateInputObjectSchema: z.ZodType<Prisma.DocumentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentAvgAggregateInputType>;
export const DocumentAvgAggregateInputObjectZodSchema = makeSchema();
