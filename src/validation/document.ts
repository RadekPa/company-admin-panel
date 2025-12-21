import { z } from 'zod'

export const DocumentCreateSchema = z.object({
  title: z.string().min(2, 'Tytuł min. 2 znaki'),
  description: z.string().optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'SIGNED']).default('DRAFT')
})

export const DocumentUpdateSchema = z.object({
  title: z.string().min(2, 'Tytuł min. 2 znaki'),
  description: z.string().optional().or(z.literal('')),
  status: z.enum(['DRAFT', 'SIGNED'])
})
