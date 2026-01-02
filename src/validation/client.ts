import { z } from 'zod'

export const ClientCreateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  phone: z.string().max(32, 'Telefon zbyt długi').optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  postalCode: z.string().max(10, 'Kod pocztowy zbyt długi').optional().or(z.literal('')),
  country: z.string().optional().or(z.literal('')),
  nip: z.string().max(20, 'NIP zbyt długi').optional().or(z.literal('')),
  regon: z.string().max(20, 'REGON zbyt długi').optional().or(z.literal('')),
  legalForm: z.string().optional().or(z.literal('')),
  bankAccount: z.string().optional().or(z.literal('')),
  notes: z.string().optional().or(z.literal('')),
})

export const ClientUpdateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  phone: z.string().max(32, 'Telefon zbyt długi').optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
  postalCode: z.string().max(10, 'Kod pocztowy zbyt długi').optional().or(z.literal('')),
  country: z.string().optional().or(z.literal('')),
  nip: z.string().max(20, 'NIP zbyt długi').optional().or(z.literal('')),
  regon: z.string().max(20, 'REGON zbyt długi').optional().or(z.literal('')),
  legalForm: z.string().optional().or(z.literal('')),
  bankAccount: z.string().optional().or(z.literal('')),
  notes: z.string().optional().or(z.literal('')),
})
