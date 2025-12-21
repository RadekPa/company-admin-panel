import * as z from 'zod';
export const InvoiceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  clientId: z.number().int(),
  client: z.unknown(),
  title: z.string(),
  issueDate: z.date(),
  paymentDate: z.date(),
  net: z.number(),
  vatPerc: z.number().int(),
  vat: z.number(),
  gross: z.number(),
  status: z.string(),
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