import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  module: z.string(),
  userAccess: z.boolean().optional(),
  advancedAccess: z.boolean().optional(),
  adminAccess: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RolePermissionsCreateManyInputObjectSchema: z.ZodType<Prisma.RolePermissionsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsCreateManyInput>;
export const RolePermissionsCreateManyInputObjectZodSchema = makeSchema();
