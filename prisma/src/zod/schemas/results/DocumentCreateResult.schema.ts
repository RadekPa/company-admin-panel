import * as z from 'zod';
export const DocumentCreateResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  clientId: z.number().int(),
  client: z.unknown()
});