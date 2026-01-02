import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  module: z.boolean().optional(),
  userAccess: z.boolean().optional(),
  advancedAccess: z.boolean().optional(),
  adminAccess: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const RolePermissionsSelectObjectSchema: z.ZodType<Prisma.RolePermissionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsSelect>;
export const RolePermissionsSelectObjectZodSchema = makeSchema();
