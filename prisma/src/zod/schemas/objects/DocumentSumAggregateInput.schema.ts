import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional()
}).strict();
export const DocumentSumAggregateInputObjectSchema: z.ZodType<Prisma.DocumentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentSumAggregateInputType>;
export const DocumentSumAggregateInputObjectZodSchema = makeSchema();
