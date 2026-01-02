import * as z from 'zod';
export const RolePermissionsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  module: z.string(),
  userAccess: z.boolean(),
  advancedAccess: z.boolean(),
  adminAccess: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    module: z.number(),
    userAccess: z.number(),
    advancedAccess: z.number(),
    adminAccess: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    module: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    module: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));