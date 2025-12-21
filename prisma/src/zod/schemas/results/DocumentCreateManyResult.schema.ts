import * as z from 'zod';
export const DocumentCreateManyResultSchema = z.object({
  count: z.number()
});