import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  address: z.literal(true).optional(),
  city: z.literal(true).optional(),
  postalCode: z.literal(true).optional(),
  country: z.literal(true).optional(),
  nip: z.literal(true).optional(),
  regon: z.literal(true).optional(),
  legalForm: z.literal(true).optional(),
  bankAccount: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClientMaxAggregateInputObjectSchema: z.ZodType<Prisma.ClientMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientMaxAggregateInputType>;
export const ClientMaxAggregateInputObjectZodSchema = makeSchema();
