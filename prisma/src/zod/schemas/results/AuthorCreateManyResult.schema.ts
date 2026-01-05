import * as z from 'zod';
export const AuthorCreateManyResultSchema = z.object({
  count: z.number()
});