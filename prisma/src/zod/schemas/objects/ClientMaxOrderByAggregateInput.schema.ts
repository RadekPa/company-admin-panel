import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  postalCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  nip: SortOrderSchema.optional(),
  regon: SortOrderSchema.optional(),
  legalForm: SortOrderSchema.optional(),
  bankAccount: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClientMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientMaxOrderByAggregateInput>;
export const ClientMaxOrderByAggregateInputObjectZodSchema = makeSchema();
