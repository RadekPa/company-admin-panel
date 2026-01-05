import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string().optional(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.unknown(),
  permissions: z.unknown().optional(),
  locale: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});