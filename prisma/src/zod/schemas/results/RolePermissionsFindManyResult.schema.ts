import * as z from 'zod';
export const RolePermissionsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  module: z.string(),
  userAccess: z.boolean(),
  advancedAccess: z.boolean(),
  adminAccess: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});