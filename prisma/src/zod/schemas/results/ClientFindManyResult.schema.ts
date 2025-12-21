import * as z from 'zod';
export const ClientFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  documents: z.array(z.unknown()),
  invoices: z.array(z.unknown())
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