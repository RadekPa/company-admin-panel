import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  module: z.literal(true).optional(),
  userAccess: z.literal(true).optional(),
  advancedAccess: z.literal(true).optional(),
  adminAccess: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const RolePermissionsMinAggregateInputObjectSchema: z.ZodType<Prisma.RolePermissionsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsMinAggregateInputType>;
export const RolePermissionsMinAggregateInputObjectZodSchema = makeSchema();
