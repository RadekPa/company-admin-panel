import * as z from 'zod';
export const DocumentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  clientId: z.number().int(),
  client: z.unknown()
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