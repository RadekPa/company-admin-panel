import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const RolePermissionsAvgAggregateInputObjectSchema: z.ZodType<Prisma.RolePermissionsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsAvgAggregateInputType>;
export const RolePermissionsAvgAggregateInputObjectZodSchema = makeSchema();
