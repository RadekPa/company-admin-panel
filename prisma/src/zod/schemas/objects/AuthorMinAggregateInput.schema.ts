import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  middleName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  description: z.literal(true).optional(),
  workEmail: z.literal(true).optional(),
  personalEmail: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AuthorMinAggregateInputObjectSchema: z.ZodType<Prisma.AuthorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuthorMinAggregateInputType>;
export const AuthorMinAggregateInputObjectZodSchema = makeSchema();
