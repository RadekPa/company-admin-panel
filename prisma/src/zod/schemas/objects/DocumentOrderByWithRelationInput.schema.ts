import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DocumentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentOrderByWithRelationInput>;
export const DocumentOrderByWithRelationInputObjectZodSchema = makeSchema();
