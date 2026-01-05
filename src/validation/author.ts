import { z } from 'zod'

export const AuthorCreateSchema = z.object({
  firstName: z.string().min(2, 'Imię min. 2 znaki'),
  middleName: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  lastName: z.string().min(2, 'Nazwisko min. 2 znaki'),
  description: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  workEmail: z.union([
    z.literal(''),
    z.string().email('Email służbowy: nieprawidłowy format email')
  ]).optional().transform(val => val === '' ? undefined : val),
  personalEmail: z.union([
    z.literal(''),
    z.string().email('Email prywatny: nieprawidłowy format email')
  ]).optional().transform(val => val === '' ? undefined : val),
})

export const AuthorUpdateSchema = z.object({
  firstName: z.string().min(2, 'Imię min. 2 znaki'),
  middleName: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  lastName: z.string().min(2, 'Nazwisko min. 2 znaki'),
  description: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  workEmail: z.union([
    z.literal(''),
    z.string().email('Email służbowy: nieprawidłowy format email')
  ]).optional().transform(val => val === '' ? undefined : val),
  personalEmail: z.union([
    z.literal(''),
    z.string().email('Email prywatny: nieprawidłowy format email')
  ]).optional().transform(val => val === '' ? undefined : val),
})
