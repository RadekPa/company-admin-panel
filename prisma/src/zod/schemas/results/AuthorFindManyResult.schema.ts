import * as z from 'zod';
export const AuthorFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  description: z.string().optional(),
  workEmail: z.string().optional(),
  personalEmail: z.string().optional(),
  photos: z.unknown().optional(),
  clientId: z.number().int().optional(),
  client: z.unknown().optional(),
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