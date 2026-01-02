import { z } from 'zod'

export const UserCreateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki').optional().or(z.literal('')),
  email: z.string().email('Nieprawidłowy email'),
  password: z.string().min(6, 'Hasło min. 6 znaków'),
  role: z.enum(['ADMIN', 'ADVANCED', 'USER']).optional()
})

export const UserUpdateSchema = z.object({
  name: z.string().min(2, 'Nazwa min. 2 znaki').optional().or(z.literal('')),
  email: z.string().email('Nieprawidłowy email').optional().or(z.literal('')),
  password: z.string().min(6, 'Hasło min. 6 znaków').optional().or(z.literal('')),
  role: z.enum(['ADMIN', 'ADVANCED', 'USER']).optional()
})
