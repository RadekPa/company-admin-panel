import * as z from 'zod';
export const ClientFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  nip: z.string().optional(),
  regon: z.string().optional(),
  legalForm: z.string().optional(),
  bankAccount: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  documents: z.array(z.unknown()),
  invoices: z.array(z.unknown())
}));