import * as z from 'zod';
export const ClientCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  documents: z.array(z.unknown()),
  invoices: z.array(z.unknown())
});