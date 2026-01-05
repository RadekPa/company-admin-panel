import * as z from 'zod';
export const AuthorUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  description: z.string().optional(),
  workEmail: z.string().optional(),
  personalEmail: z.string().optional(),
  photos: z.unknown().optional(),
  clientId: z.number().int().optional(),
  client: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));