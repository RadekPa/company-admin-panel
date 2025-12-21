import { z } from 'zod'

export const ClientCreateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  phone: z.string().max(32, 'Telefon zbyt długi').optional().or(z.literal(''))
})

export const ClientUpdateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  phone: z.string().max(32, 'Telefon zbyt długi').optional().or(z.literal(''))
})
