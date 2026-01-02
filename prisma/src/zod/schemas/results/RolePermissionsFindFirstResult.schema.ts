import * as z from 'zod';
export const RolePermissionsFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  module: z.string(),
  userAccess: z.boolean(),
  advancedAccess: z.boolean(),
  adminAccess: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));